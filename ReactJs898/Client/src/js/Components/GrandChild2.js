var React = require('react');
var {render}=require('react-dom');

var GrandChild2 = React.createClass({
  render:function(){
    return (<div><h1>I am second Grand Child Component</h1></div>);
  }
});
module.exports=GrandChild2;
