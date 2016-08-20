var React = require('react');
var {render}=require('react-dom');
var {Router,Route,browserHistory} = require('react-router');

var NavBarComponent = require("./Components/NavBarComponent.js");
var MainComponent = require("./Components/MainComponent.js");
var Rules = require("./Components/Rules.js");


//var InboxMessageComponent= require("./Components/InboxMessageComponent.js");

var MainComponent1 = React.createClass({
  render:function(){
    return (<div className="container">
    <NavBarComponent/>
    {this.props.children}
    </div>);
  }
});
//render(<MainComponent/>,document.getElementById('main_content'));
render((<Router history={browserHistory}>
<Route path="/" component={MainComponent1}>
<Route path="/mygmail" component={MainComponent}/>
<Route path="/LocalDataBase" component={Rules}/>
</Route>
</Router>),document.getElementById('main_content'));
