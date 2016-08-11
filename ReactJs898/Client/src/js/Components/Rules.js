var  React=require("react");
var Compose=React.createClass(
{
  render:function()
  {
    return (

      <div className="container">
      <div className="inbox-body">
      <button className="btn btn-primary"><a href="#myModal3" data-toggle="modal"  title="Compose" className="btn btn-compose">
        <h5> Set Rules </h5>
      </a></button>
      <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="myModal3" className="modal fade">
      <div className="modal-dialog">
      <div className="modal-content">

      <div className="modal-header">
    <button aria-hidden="true" data-dismiss="modal" className="close" type="button"></button>
    <h4 className="modal-title">Set Rules</h4>
      </div>

     <form>
                 <div className="form-group">
                   <label for="exampleInputEmail1">Email address</label>
                   <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                 </div>
                 <div className="form-group">
                   <label for="createfolder">Folder Name</label>
                   <input type="create" className="form-control" id="createfolder" placeholder="create" />
                 </div>
             <button type="submit" className="btn btn-default" >Submit</button>
               </form>

      </div>
      </div>
      </div>
      </div>
      </div>
  );
  }

})
module.exports=Compose;
