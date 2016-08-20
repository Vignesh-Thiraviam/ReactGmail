var  React=require("react");

var Rules=React.createClass(
{
  getInitialState : function(){
    return({row1:[]});
  },

  componentDidMount : function(){
    var rows=[];
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

      <div className="container22">
      <table>
      {this.state.row1}
      </table>
      </div>
  );
  }

});

var SingleMessage = React.createClass({
  getInitialState : function(){
    return({showUpdate : false});
  },
  handleUpdateClick : function(){
    this.setState({showUpdate : true});
  },
  handleDeleteClick : function(e){
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
          <td><a href="#myModal22" data-toggle="modal" onClick={this.handleUpdateClick} >Update</a></td>
          {this.state.showUpdate ? <Update  data = {this.props.data}/>:null}
          </tr>);
  }
});

var Update = React.createClass({
  updateMessage : function(e){
    e.preventDefault;
    var sendData = {id:this.props.data._id,subject : this.refs.updateFSubjectPlace.value};
    console.log(sendData);
    $.ajax({
      url : 'http://localhost:8080/send/',
      dataType: 'json',
      data : {id:this.props.data._id,subject : this.refs.updateFSubjectPlace.value},
      type: 'PUT',
      success : function(){
        console.log("Inside success of update");
      },
      error : function(err){
        console.log("Inside error of update");
      }
    });

  },
  render:function()
  {
    console.log("inside Update new 55");
    console.log("data here");
    console.log(this.props.data);
    return (
      <div className="modal fade" id="myModal22">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">

                <h4 className="modal-title">Update Local Message</h4>
              </div>
              <div className="modal-body">
                <form className="form-horizontal">
                  <div className="form-group">
                    <div className="col-lg-10">
                      <input type="text" ref = "updateFromNamePlace" defaultValue={this.props.data.fromname} className="form-control" id="inputName" name="Title"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-10">
                      <input type="text" ref = "updateFSubjectPlace" defaultValue={this.props.data.subject} className="form-control" id="inputEmail" name="Year"/>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">

                <button className="btn btn-primary" onClick={this.updateMessage} data-dismiss="modal">Update</button>
              </div>
            </div>
          </div>
        </div>
      );
  }
});
module.exports=Rules;
