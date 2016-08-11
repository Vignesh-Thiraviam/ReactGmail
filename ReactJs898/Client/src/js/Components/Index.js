var React = require('react');
var {render} = require('react-dom');
var {Link}=require('react-router');

var Index = React.createClass({
  render:function(){
    return(
      <div className="row">

      <div className="col-lg-4 col-md-4 col-sm-4 navbar">
      <ul>
      <li><Link to ="/About" activeClassName="active">About Uss</Link></li>
      <li><Link to ="/ContactUs" activeClassName="active">Contact Uss</Link></li>
      </ul>
      </div>
      <div className="col-lg-8 col-md-8 col-sm-8">
      {this.props.children}
      </div>
      </div>
    );
  }
});
module.exports=Index;
