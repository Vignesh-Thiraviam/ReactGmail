var React=require('react');
var Render = require('react-dom');
var Reply = require("./Reply.js");
var Save = require("./Save.js");
var dataReceived = false;
var counter = 1;
var InboxFolder = React.createClass({
getInitialState: function() {
    return {rowInformation: []};
  },
componentDidMount: function () {
	var messageIdList = [];
	var accessToken = localStorage.getItem('gToken');
    $.ajax({
       url: 'https://www.googleapis.com/gmail/v1/users/thiraviammvignesh%40gmail.com/messages?maxResults=10&key={AIzaSyDpisvp_nlccXBJ61h0nBZu2Q0qcArB4fg}',
       dataType: 'json',
       type: 'GET',
       beforeSend: function (request)
       {
         request.setRequestHeader("Authorization", "Bearer "+accessToken);
       },
	   success: function(data1)
		   {
		     dataReceived=true;
		     data1.messages.forEach(function(message){
			        messageIdList.push(message.id);
		      });
          var objarr = [];
          messageIdList.forEach(function(singleId){
            $.ajax({
              url :'https://www.googleapis.com/gmail/v1/users/thiraviammvignesh%40gmail.com/messages/'+singleId+'?key={AIzaSyDpisvp_nlccXBJ61h0nBZu2Q0qcArB4fg}',
              dataType : 'json',
              type : 'GET',
              beforeSend: function (request)
              {
                request.setRequestHeader("Authorization", "Bearer "+accessToken);
              },
              async: false,
              success(data2){
                var fromName ='',dateReceived='',subjectOfMaildata='',messageId='';
                console.log(data2);
                console.log("teek hai bhai latest");
                console.log(data2.payload.body);

                for(var i =0;i<data2.payload.headers.length;i++){
			               if(data2.payload.headers[i].name == 'From'){
				                  fromName = data2.payload.headers[i].value;
                			   }
                		   if(data2.payload.headers[i].name == 'Date'){
                          dateReceived=data2.payload.headers[i].value;
                			   }
                         if(data2.payload.headers[i].name == 'Subject'){
                          subjectOfMaildata =data2.payload.headers[i].value;
                         }
                         if(data2.payload.headers[i].name == 'Message-ID'){
                          messageId =data2.payload.headers[i].value;
                         }
                		   }
                       var person = {fromname:fromName, datareceived:dateReceived, subjectofmaildata:subjectOfMaildata, messageid:messageId};
                       objarr.push(person);

              },
              error(e){
                console.log("Error here"+ e);
              }
            });
          }
        );
        this.setState({rowInformation:objarr});
        console.log("Hello New");
        console.log(this.state.rowInformation);
       }.bind(this),
       error: function(xhr, status, err) {
		   console.log("hello bob");
         console.error(err.toString());
       }.bind(this)
    });
  },

render :function(){
if(dataReceived){
	var loginButton = [];
if (this.state.rowInformation ) {
    for(var j=0;j<this.state.rowInformation.length;j++){
		  loginButton.push(<OneSeparateList data={this.state.rowInformation[j]}/>);
      }
		} }
  return(<div>
    <table className="table table-inbox table-hover mytableClass">
    <thead>
      <tr>
        <td>Name</td>
        <td>Snippet</td>
        <td>Date</td>
      </tr>
      </thead>
      <tbody>
      {loginButton}
      </tbody>
    </table>
    </div>);
  }
});

var callButton = false;
var OneSeparateList = React.createClass({
  getInitialState:function(){
    return({showModal : false,callButton : false});
  },
  handleMessageClick : function(){
    this.setState({showModal : true});
  },
  saveMessage : function(){
    var from = this.props.data.fromname;
    var receivedDate = this.props.data.datareceived;
    var subjectof = (this.props.data.subjectofmaildata).replace(/\r?\n|\r/g,' ');
    var saveDetail = {frominfo :from,date : receivedDate,subject : subjectof };
    console.log("Inside save message");
    console.log(JSON.stringify(saveDetail));
    $.ajax({
      url : 'http://localhost:8080/send/',
      dataType : 'json',
      data : saveDetail,
      type : 'POST',
      async : false,
      success : function(data){
        console.log(data.response);
      },
      error : function(xhr, status, err){
        console.log("Inside save error");
      }
    });
  },
  render:function(){
    console.log("inside one separate new");
    console.log(this.props.data);
    var subjectof = (this.props.data.subjectofmaildata).replace(/\r?\n|\r/g,' ');
    return(<div>
          <tr>
          <td>{this.props.data.fromname}</td>
          <td><a href="#myModal7" data-toggle="modal" onClick={this.handleMessageClick} >{subjectof}</a></td>
          {this.state.showModal ? <Reply data = {this.props.data}/>:null}
          <td><button className="btn btn-success" onClick={this.saveMessage}>Save</button></td>
          <td>{this.props.data.datareceived}</td>
          </tr>
      </div>);
  }
});
module.exports=InboxFolder;
