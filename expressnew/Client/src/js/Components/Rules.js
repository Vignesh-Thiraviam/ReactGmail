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
          rows.push(<tr><td>{data[i].date}</td><td>{data[i].fromname}</td><td>{data[i].subject}</td></tr>);
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

})
module.exports=Rules;
