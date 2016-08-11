var React = require('react');
var {render}=require('react-dom');

var GrandChild=require('./GrandChild.js');
var GrandChild2=require('./GrandChild2.js');

var data = [{
 "id": "1564e844d3fadc16",
 "from": "Facebook",
 "labelIds": [
  "SPAM",
  "CATEGORY_SOCIAL",
  "UNREAD"
 ],
 "snippet": "Here are the mapla people are talking about Trending Now on Facebook Here are the stories people are talking about. Talgo Spanish High-Speed Train Delayed on 1st Test Run From Delhi to Mumbai Due to",
}
];

var ChildComponents = React.createClass({
  render:function(){


	  /*var commentNodes = data.map(function(comment) {
      return (
	  <tr className="unread" onClick={this.handleClick}>
	  <td className="inbox-small-cells">
        <input type="checkbox" className="mail-checkbox"/>
      </td>
	  <td className="view-message ">{comment.from}</td>
	  <td className="view-message ">{comment.snippet}</td>

	  </tr>
      );
    });*/


    return (
			/*<table className="table table-inbox table-hover">
			  <tbody>
			  {commentNodes}
			  </tbody>
			</table>*/
      <InboxFolder />
	);
  }
});


var dataReceived = false;
var InboxFolder = React.createClass({
getInitialState: function() {
    return {data: []};
  },
componentDidMount: function () {
	var messageIdList = [];
  console.log("Vignesh Bhai");
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
			console.log("hello");
		   console.log(data1);
		   dataReceived=true;
		data1.messages.forEach(function(message){
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
console.log("vignesh122");
if(dataReceived){
	var loginButton = '';
if (this.state.data ) {
		  loginButton = <OneSeparateList data={this.state.data}/>;
      console.log("Hello magilzhchi");
		} }
  return(<div>
      <h3>User Profile search</h3>
      {loginButton}
    </div>);

  }
});


module.exports=ChildComponents;
