var  React=require("react");
var Reply=React.createClass(
{
  render:function()
  {
    console.log("inside reply new");
    console.log("data here");
    console.log(this.props.data);
    return (
      <div className="container">
      <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="myModal7" className="modal fade">
      <div className="modal-dialog">
      <div className="modal-content">
      <div className="modal-header">
      <button aria-hidden="true" data-dismiss="modal" className="close" type="button"></button>
      <h4 className="modal-title">Reply</h4>
      </div>
      <form>
      <div className="container-fluid">
      <div className="form-group">
      <label className="col-lg-2 control-label">To</label>
      <label className="col-lg-2 control-label">thiraviammvignesh@gmail.com</label>
      </div>
    <div className="form-group">
    <label className="col-lg-2 control-label">Message</label>
    <div className="col-lg-10">
    <textarea rows="10" cols="30" className="form-control" id="" name="" ></textarea>
    </div>
    </div>

    <div className="form-group">
    <div className="col-lg-offset-2 col-lg-10">
    <span className="btn green fileinput-button">
    <i className="fa fa-plus fa fa-white"></i>
    <span>Attachment</span>
    <input type="file" name="files[]" multiple="" />
    </span>
    <button className="btn btn-send" type="submit">SendMessge</button>
    </div>
    </div>
      </div>
      </form>

      </div>
      </div>
      </div>
      </div>


    );
  }

})
module.exports=Reply;
