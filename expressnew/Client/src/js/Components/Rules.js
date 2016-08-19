var  React=require("react");
var rows=[];
var Rules=React.createClass(
{
  getInitialState : function(){
    return({row1:[]});
  },

  componentDidMount : function(){
    console.log("Inside my rules component new");
    $.ajax({
      url : 'http://localhost:8080/send/',
      dataType: 'json',
      contentType : 'application/json',
      type: 'GET',
      async: false,
      success: function(data){
        console.log(data);
        for(var i=0;i<data.length;i++){
          console.log(data[i]);
        //  rows.push(<tr><td>{data[i].date}</td><td>{data[i].fromname}</td><td>{data[i].subject}</td></tr>);
        rows.push(<SingleMessage data={data[i]} />);
        }
      },
      error : function(err){
        console.log("Hi");
      }
    });
    this.setState({row1 :rows });
  },
  render:function()
  {
    return (

      <div className="container">
      <div className="inbox-body">
      <button className="btn btn-primary"><a href="#myModal3" data-toggle="modal"  title="Compose" className="btn btn-compose">
        <h5> Set Rules7 </h5>
      </a></button>
      <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="myModal3" className="modal fade">
      <div className="modal-dialog">
      <div className="modal-content">

      <div className="modal-header">
    <button aria-hidden="true" data-dismiss="modal" className="close" type="button"></button>
    <h4 className="modal-title">Set Rules9</h4>
      </div>

     <form>
     <table>
     {this.state.row1}
     </table>
      </form>

      </div>
      </div>
      </div>
      </div>
      </div>
  );
  }

});


var SingleMessage = React.createClass({
  handleDeleteClick : function(e){
    e.preventDefault;
    var id1={ id :this.props.data._id};
    console.log("Idsssss is"+id1);
    $.ajax({
      url : 'http://localhost:8080/send/',
      dataType: 'json',
      data : JSON.stringify(id1),
      contentType : 'application/json',
      type: 'DELETE',
      async: false,
      success : function(){
        console.log("Inside success of delete");
      },
      error : function(err){
        console.log("Inside error of delete");
      }
    });
  },
  render : function(){
    return(<tr>
          <td>{this.props.data.date}</td>
          <td>{this.props.data.fromname}</td>
          <td>{this.props.data.subject}</td>
          <td><button className="btn btn-warning" onClick = {this.handleDeleteClick}>Delete</button></td>
          </tr>);
  }
});
module.exports=Rules;
