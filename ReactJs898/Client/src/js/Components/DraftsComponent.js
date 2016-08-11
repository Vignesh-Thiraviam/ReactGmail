var React = require('react');
var {render}=require('react-dom');

var DraftsComponent = React.createClass({

  render:function(){
    return (
			<table className="table table-inbox table-hover">
                                <tbody>
                                  <tr className="unread">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                      <td className="view-message  dont-show">Bobby</td>
                                      <td className="view-message ">Added a new className: Login className Fast Site</td>
                                      <td className="view-message  inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                                      <td className="view-message  text-right">9:27 AM</td>
                                  </tr>
                                  <tr className="unread">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                      <td className="view-message dont-show">Sachin</td>
                                      <td className="view-message">Improve the search presence of WebSite</td>
                                      <td className="view-message inbox-small-cells"></td>
                                      <td className="view-message text-right">March 15</td>
                                  </tr>
                                  <tr className="">
                                      <td className="inbox-small-cells">
                                          <input type="checkbox" className="mail-checkbox"/>
                                      </td>
                                      <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                      <td className="view-message dont-show">Dhoni</td>
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
                                  

                              </tbody>
                              </table>
	);
  }
});
module.exports=DraftsComponent;
