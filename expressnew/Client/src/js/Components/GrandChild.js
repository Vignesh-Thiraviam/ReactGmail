var React = require('react');
var {render}=require('react-dom');

var GrandChild = React.createClass({
  render:function(){
    return (<div><h1>I am a Grand Child Component</h1></div>);
  }
});
module.exports=GrandChild;
