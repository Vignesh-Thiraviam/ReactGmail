var React=require('react');
var InboxFolder=require('./InboxFolder.js');
var loggedIn=false;
var GmailApp=React.createClass({
	getInitialState: function() {
		console.log("hello56");
    return {
		mydata:[]
		};
	},
	allLabels: function()
  {

	  //var that=this;
      var accessToken = localStorage.getItem('gToken');
      $.ajax({
       url: 'https://www.googleapis.com/gmail/v1/users/thiraviammvignesh%40gmail.com/messages?maxResults=10&key={AIzaSyDpisvp_nlccXBJ61h0nBZu2Q0qcArB4fg}',
       dataType: 'json',
       type: 'GET',
       beforeSend: function (request)
       {
         request.setRequestHeader("Authorization", "Bearer "+accessToken);
       },
		async : false,
	   success: function(data)
       {
         //this.setState({allLabelsData:data.labels});
         //console.log(this.state.allLabelsData);
		 this.setState({
			mydata:data
			});
		 loggedIn=true;
		 this.props.handleUserInput(loggedIn);
		 //console.log("kabali");
		 //console.log(this.state.mydata);
       }.bind(this),
       error: function(xhr, status, err) {
         console.error(err.toString());
       }.bind(this)
    });
  },
	gmailLogin: function()
  {
    var acToken, tokenType, expiresIn;
    var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
    var VALIDURL    =   'https://www.googleapis.com/oauth2/v4/token?access_token=';
    var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.readonly';
    var CLIENTID    =   '7758425165-mngktjg0t7hbm2mpldlgej3kiehp61f7.apps.googleusercontent.com';
    var REDIRECT    =   'http://localhost:8080';
    var TYPE        =   'token';
    var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
    var win         =   window.open(_url, "windowname1", 'width=800, height=600');

    var pollTimer   =   window.setInterval(function()
    {
        try
        {
            if (win.document.URL.indexOf(REDIRECT) != -1)
            {
                window.clearInterval(pollTimer);
                var url =   win.document.URL;
                acToken =   gup(url, 'access_token');
                tokenType = gup(url, 'token_type');
                expiresIn = gup(url, 'expires_in');
                localStorage.setItem('gToken',acToken);
                localStorage.setItem('gTokenType',tokenType);
                localStorage.setItem('gExprireIn',expiresIn);
                console.log("gToken.."+localStorage.getItem('gToken'));
                console.log("gTokenType.."+localStorage.getItem('gTokenType'));
                console.log("gExprireIn.."+localStorage.getItem('gExprireIn'));
                function gup(url, name) {
                    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
                    var regexS = "[\\#&]"+name+"=([^&#]*)";
                    var regex = new RegExp( regexS );
                    var results = regex.exec( url );
                    if( results == null )
                        return "";
                    else
                        return results[1];
                }
                win.close();
            }
        }
        catch(e)
        {
          console.log(e);
        }
    }, 500);
    this.allLabels();
  },

	render : function(){
		var loginButton;
		if (loggedIn) {
		  loginButton = <InboxFolder />, document.getElementById('inboxTab');

		}
		return (<div>
			<button id="authorize-button" onClick={this.gmailLogin}
            className="btn btn-primary pull-right">Login
		</button>

		</div>
		);
	}
});

module.exports=GmailApp;

//render(<GmailApp/>,document.getElementById('login_content'));
