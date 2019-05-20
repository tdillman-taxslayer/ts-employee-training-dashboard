import { h, Component } from "preact";
import { Router, Route, route } from "preact-router";

// Code-splitting is automated for routes
import SideBar, { RouteIDs } from "./sidebar";
import { Grid } from "semantic-ui-react";
import MyDashboard from "../routes/MyDashboard";
import Library from "../routes/Library";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  handleSideBarOnClick(id) {
    switch (id) {
      case RouteIDs.DASHBOARD:
        route("/", true);
        break;
      case RouteIDs.LIBRARY:
        route("/library", true);
        break;
    }
  }

  render() {
    return (
      <div id="app">
        <SideBar onClickHandler={this.handleSideBarOnClick} />
        <div className={"AppContainer"}>
          <Router onChange={this.handleRoute}>
            <Route path="/" component={MyDashboard} />
            <Route path="/library" component={Library} />
          </Router>
        </div>
      </div>
    );
  }
}
