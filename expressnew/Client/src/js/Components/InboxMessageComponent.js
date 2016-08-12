var React = require('react');
var {render}=require('react-dom');

var InboxMessageComponent = React.createClass({
  render:function(){
    return (
			<div>
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
                                      <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                      <td className="view-message dont-show">Facebook</td>
                                      <td className="view-message view-message">Alireza Zare Login faild</td>
                                      <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                                      <td className="view-message text-right">feb 14</td>
                                  </tr>
                              </tbody>
                              </table>
			</div>
	);
  }
  
  //myFirstMethodInReact : function(){
	 // console.log("hello in my method")
	//<InboxMessageComponent />
  //}
});
module.exports=InboxMessageComponent;
