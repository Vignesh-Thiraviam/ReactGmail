var React = require('react');
var Save = React.createClass({
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
      data : JSON.stringify(saveDetail),
      type : 'POST',
      async : false,
      success : function(data){
        console.log("inside Success");
        console.log(data);
      },
      error : function(xhr, status, err){
        console.log("Inside save error");
      }
    });
  },
  render : function(){
    return(<div>{this.saveMessage}</div>);
  }
});
module.exports=Save;
