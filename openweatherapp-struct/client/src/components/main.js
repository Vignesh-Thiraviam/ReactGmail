var React = require('react');
var {render} = require('react-dom');
var SearchComponent = require("./SearchComponent.js");

var BaseComponent = React.createClass({

  render : function(){
    return(
      <div>
      <SearchComponent />
      </div>
    );
  }
});

render(<BaseComponent />, document.getElementById('app'));
