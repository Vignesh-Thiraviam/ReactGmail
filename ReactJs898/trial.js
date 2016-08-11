var React = require('react');
var {render}=require('react-dom');

var MainComponent = React.createClass({
  render:function(){
    return (
      <div className="container-fluid">
      <div className="row" id="row1">
        <div className="col-md-3">
          <a><h3>Kavitha G S</h3></a>
        </div>
        <div className="col-md-6">
              <label for="ex3"></label>
              <input className="form-control" id="ex3" type="text"/>
        </div>
        <div className="col-md-3 pull-right">
          <button type="button" className="btn btn-danger pull-right">
            Logout
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <button type="button" className="btn btn-primary">
            Compose
          </button> <br/><a href="#" className="btn" type="button"><h4>All</h4></a> <br/><a href="#" className="btn" type="button"><h4>Inbox</h4></a> <br/> <a href="#" className="btn" type="button"><h4>Drafts</h4></a><br/> <a href="#" className="btn" type="button"><h4>Sent</h4></a> <br/><a href="#" className="btn" type="button"><h4>Drafts</h4></a> <br/><a href="#" className="btn" type="button"><h4>Trash</h4></a> <br/><a href="#" className="btn" type="button"><h4>Rules</h4></a><br/>
        </div><br/>
        <div className="col-md-9">
          <div className="btn-btn-default" id="3buttons">

            <button className="btn btn-primary" type="button">
              Reply
            </button>
            <button className="btn btn-danger" type="button">
               Delete
            </button>
            <button className="btn btn-warning" type="button">
               Forward
            </button>
          </div><br/><br/>
          <div className="row">
            <div className="col-md-12">
              <table className="table table-inbox table-hover">
                                <tbody>
                                  <tr className="unread">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                      <td className="view-message  dont-show">PHPclassName</td>
                                      <td className="view-message ">Added a new className: Login className Fast Site</td>
                                      <td className="view-message  inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                                      <td className="view-message  text-right">9:27 AM</td>
                                  </tr>
                                  <tr className="unread">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                      <td className="view-message dont-show">Google Webmaster </td>
                                      <td className="view-message">Improve the search presence of WebSite</td>
                                      <td className="view-message inbox-small-cells"></td>
                                      <td className="view-message text-right">March 15</td>
                                  </tr>
                                  <tr className="">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                      <td className="view-message dont-show">JW Player</td>
                                      <td className="view-message">Last Chance: Upgrade to Pro for </td>
                                      <td className="view-message inbox-small-cells"></td>
                                      <td className="view-message text-right">March 15</td>
                                  </tr>
                                  <tr className="">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                      <td className="view-message dont-show">Tim Reid, S P N</td>
                                      <td className="view-message">Boost Your Website Traffic</td>
                                      <td className="view-message inbox-small-cells"></td>
                                      <td className="view-message text-right">April 01</td>
                                  </tr>
                                  <tr className="">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                                      <td className="view-message dont-show">Freelancer.com <span className="label label-danger pull-right">urgent</span></td>
                                      <td className="view-message">Stop wasting your visitors </td>
                                      <td className="view-message inbox-small-cells"></td>
                                      <td className="view-message text-right">May 23</td>
                                  </tr>
                                  <tr className="">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                                      <td className="view-message dont-show">WOW Slider </td>
                                      <td className="view-message">New WOW Slider v7 - 67% off</td>
                                      <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                                      <td className="view-message text-right">March 14</td>
                                  </tr>
                                  <tr className="">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                                      <td className="view-message dont-show">LinkedIn Pulse</td>
                                      <td className="view-message">The One Sign Your Co-Worker Will Stab</td>
                                      <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                                      <td className="view-message text-right">Feb 19</td>
                                  </tr>
                                  <tr className="">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                      <td className="view-message dont-show">Drupal Community<span className="label label-success pull-right">megazine</span></td>
                                      <td className="view-message view-message">Welcome to the Drupal Community</td>
                                      <td className="view-message inbox-small-cells"></td>
                                      <td className="view-message text-right">March 04</td>
                                  </tr>
                                  <tr className="">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                      <td className="view-message dont-show">Facebook</td>
                                      <td className="view-message view-message">Somebody requested a new password </td>
                                      <td className="view-message inbox-small-cells"></td>
                                      <td className="view-message text-right">June 13</td>
                                  </tr>
                                  <tr className="">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                      <td className="view-message dont-show">Skype <span className="label label-info pull-right">family</span></td>
                                      <td className="view-message view-message">Password successfully changed</td>
                                      <td className="view-message inbox-small-cells"></td>
                                      <td className="view-message text-right">March 24</td>
                                  </tr>
                                  <tr className="">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                                      <td className="view-message dont-show">Google+</td>
                                      <td className="view-message">alireza, do you know</td>
                                      <td className="view-message inbox-small-cells"></td>
                                      <td className="view-message text-right">March 09</td>
                                  </tr>
                                  <tr className="">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                                      <td className="dont-show">Zoosk </td>
                                      <td className="view-message">7 new singles we think you"'"ll like</td>
                                      <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                                      <td className="view-message text-right">May 14</td>
                                  </tr>
                                  <tr className="">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                      <td className="view-message dont-show">LinkedIn </td>
                                      <td className="view-message">Alireza: Nokia Networks, System Group and </td>
                                      <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                                      <td className="view-message text-right">February 25</td>
                                  </tr>
                                  <tr className="">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                      <td className="dont-show">Facebook</td>
                                      <td className="view-message view-message">Your account was recently logged into</td>
                                      <td className="view-message inbox-small-cells"></td>
                                      <td className="view-message text-right">March 14</td>
                                  </tr>
                                  <tr className="">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                      <td className="view-message dont-show">Twitter</td>
                                      <td className="view-message">Your Twitter password has been changed</td>
                                      <td className="view-message inbox-small-cells"></td>
                                      <td className="view-message text-right">April 07</td>
                                  </tr>
                                  <tr className="">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                      <td className="view-message dont-show">InternetSeer Website Monitoring</td>
                                      <td className="view-message">http://golddesigner.org/ Performance Report</td>
                                      <td className="view-message inbox-small-cells"></td>
                                      <td className="view-message text-right">July 14</td>
                                  </tr>
                                  <tr className="">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                                      <td className="view-message dont-show">AddMe.com</td>
                                      <td className="view-message">Submit Your Website to the AddMe Business Directory</td>
                                      <td className="view-message inbox-small-cells"></td>
                                      <td className="view-message text-right">August 10</td>
                                  </tr>
                                  <tr className="">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                      <td className="view-message dont-show">Terri Rexer, S P N</td>
                                      <td className="view-message view-message">Forget Google AdWords: Un-Limited Clicks fo</td>
                                      <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                                      <td className="view-message text-right">April 14</td>
                                  </tr>
                                  <tr className="">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                      <td className="view-message dont-show">Bertina </td>
                                      <td className="view-message">IMPORTANT: Don"'"t lose your domains!</td>
                                      <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                                      <td className="view-message text-right">June 16</td>
                                  </tr>
                                  <tr className="">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                                      <td className="view-message dont-show">Laura Gaffin, S P N </td>
                                      <td className="view-message">Your Website On Google (Higher Rankings Are Better)</td>
                                      <td className="view-message inbox-small-cells"></td>
                                      <td className="view-message text-right">August 10</td>
                                  </tr>
                                  <tr className="">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                      <td className="view-message dont-show">Facebook</td>
                                      <td className="view-message view-message">Alireza Zare Login faild</td>
                                      <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                                      <td className="view-message text-right">feb 14</td>
                                  </tr>
                              </tbody>
                              </table>
                          </div>
          </div>
        </div>
      </div>
      </div>
  );
  }
});
render(<MainComponent/>,document.getElementById('app'));
