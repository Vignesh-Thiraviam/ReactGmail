//https://www.googleapis.com/gmail/v1/users/thiraviammvignesh%40gmail.com/drafts?maxResults=10&key={AIzaSyDpisvp_nlccXBJ61h0nBZu2Q0qcArB4fg}
var React=require('react');
var Render = require('react-dom');
//var Reply = require("./Reply.js");
var dataReceived = false;
var Drafts = React.createClass({
getInitialState: function() {
    return {data: []};
  },
componentDidMount: function () {
	var messageIdList = [];
	var accessToken = localStorage.getItem('gToken');
    $.ajax({
       url: 'https://www.googleapis.com/gmail/v1/users/thiraviammvignesh%40gmail.com/drafts?maxResults=10&key={AIzaSyDpisvp_nlccXBJ61h0nBZu2Q0qcArB4fg}',
       dataType: 'json',
       type: 'GET',
       beforeSend: function (request)
       {
         request.setRequestHeader("Authorization", "Bearer "+accessToken);
       },
	   success: function(data1)
		{
			console.log("hello");
      alert("drafts");
		   console.log(data1);
		   dataReceived=true;
		data1.drafts.forEach(function(message){
			messageIdList.push(message.id);
		});
		this.setState({data: messageIdList});
		//arrayvar: this.state.arrayvar.concat([newelement]);
       }.bind(this),
       error: function(xhr, status, err) {
		   console.log("hello bob");
         console.error(err.toString());
       }.bind(this)
    });
  },

render :function(){
console.log("vignesh127");
if(dataReceived){
	var loginButton = '';
if (this.state.data ) {
		  loginButton = <OneSeparateList1 data={this.state.data}/>;
      console.log("Hello magilzhchi");
		} }
  return(<div>
      {loginButton}
    </div>);

  }
});

 var rows=[];
var OneSeparateList1= React.createClass({
getInitialState: function() {
    return {data: [],
            showModal : false};
  },
  handleMessageClick : function(){
    this.setState({showModal : true});

  },
componentDidMount: function () {

	this.setState({
				data: this.props.data
			});
	var accessToken = localStorage.getItem('gToken');
	var dataArray=this.props.data;
	console.log("magilzhchi"+dataArray);
	for(var i=0;i<dataArray.length;i++){
		console.log("hi");
    $.ajax({
      // url: 'https://www.googleapis.com/gmail/v1/users/thiraviammvignesh%40gmail.com/messages/'+dataArray[i]+'?key={AIzaSyDpisvp_nlccXBJ61h0nBZu2Q0qcArB4fg}',
	  url: 'https://www.googleapis.com/gmail/v1/users/thiraviammvignesh%40gmail.com/drafts/'+dataArray[i]+'?key={AIzaSyDpisvp_nlccXBJ61h0nBZu2Q0qcArB4fg}',
       dataType: 'json',
       type: 'GET',
	   async: false,
       beforeSend: function (request)
       {
         request.setRequestHeader("Authorization", "Bearer "+accessToken);
       },
	   success: function(data1)
		{
			var fromName= '';
			var dateReceived='';
			console.log("hello vicky the boss here hi"+data1 );
      console.log(data1.message);
      console.log(data1.message.payload);
      console.log(data1.message.payload.headers);
		   //console.log(data1.payload.headers[0].From);
		  /*for(var i =0;i<data1.message.payload.headers.length;i++){
			   if(data1.payload.headers[i].name == 'To'){
				   //console.log(data1.payload.headers[i].value);
				   fromName=data1.message.payload.headers[i].value;
			   }
			   if(data1.payload.headers[i].name == 'Date'){
				   dateReceived=data1.message.payload.headers[i].value;
			   }
		   }
		   console.log(data1.payload.headers[10]);
		     rows.push(<tr><td>{fromName}</td><td><a href="#myModal7" data-toggle="modal" onClick={this.handleMessageClick} >{data1.message.snippet}</a></td><td>{dateReceived}</td></tr>
       ); */

       }.bind(this),
       error: function(xhr, status, err) {
		   console.log("hello bob");
         console.error(err.toString());
       }.bind(this)
    });
	}
		console.log("HTML ");
    console.log(rows);
  },
/*
<table className="table table-inbox table-hover">
  <tbody>
  {commentNodes}
  </tbody>
</table>
*/
render :function(){
console.log("vignesh116");
console.log(this.state.data);
  return(<div>
      <table className="table table-inbox table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Snippet</th>
			<th>Date</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>

    </div>);

  }

});

module.exports=Drafts;
