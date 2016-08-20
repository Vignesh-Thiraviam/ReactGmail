var React = require('react');
var {render}=require('react-dom');

var GmailApp = require("./GmailApp.js");
var ChildComponents=require("./ChildComponents.js");
var ChildComponent2=require("./ChildComponent2.js");
var DraftsComponent=require("./DraftsComponent.js");
var TrashComponent=require("./TrashComponent.js");
var Compose=require("./Compose.js");
var InboxFolder = require("./InboxFolder.js");
var Drafts = require("./Drafts.js");
var Rules = require("./Rules.js");


var MainComponent = React.createClass({
  getInitialState: function() {
    return {
      inStockOnly: false
    };
  },
  handleUserInput: function(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    });
  },

  render:function(){
    var loginButton='';
    var callRule ='';
    var drafts ='';
    if (this.state.inStockOnly) {
		  loginButton = <InboxFolder />;
      callRule = <Rules />
      drafts =<Drafts />;
		}
    return (
      <div className="container-fluid">
      <div className="row" id="row1">
       <div className="col-md-3">
       <a className="navbar-brand" href="/"><img src="images/gmail.jpg" alt="Gmail"/></a>
       </div>
       <div className="col-md-6">
       <form className="navbar-form">
       <div id="searchId">
             <input className="form-control" type="text"/>
             <button type="submit" className="btn btn-default pull-left" id="glyphSearch"><span className="glyphicon glyphicon-search"></span></button>
             </div>
      </form>
       </div>
       <div className="col-md-3">
       <GmailApp handleUserInput={this.handleUserInput}/>
       </div>

     </div>

      <div className="row" id="row0">
      <div className="col-md-2" id="menu">
      <Compose/>
      </div>
      <div className="col-md-10" id="main">

      <div className="row" id="row2">
        <div className="col-12">
			<div className="tabbable">
			  <ul className="nav nav-tabs">
				<li className="active"><a href="#inboxTab" data-toggle="tab">Inbox92</a></li>
				<li><a href="#sentTab" data-toggle="tab">SentBox30</a></li>
        <li><a href="#draftsTab" data-toggle="tab">Drafts</a></li>
        <li><a href="#trashTab" data-toggle="tab">Trash</a></li>
			  </ul>
			  <div className="tab-content">
				<div className="tab-pane active" id="inboxTab">
        {loginButton}
				</div>

				<div className="tab-pane" id="sentTab">
          <ChildComponent2 />
				</div>
        <div className="tab-pane" id="draftsTab">

				</div>
        <div className="tab-pane" id="trashTab">
          <TrashComponent />
				</div>

			  </div>
			</div>

		</div>
      </div>
	</div>
</div>
</div>
  );
  }
});

module.exports=MainComponent;
