import { h, Component } from "preact";
import { Router, Route, route } from "preact-router";

// Code-splitting is automated for routes
import SideBar, { RouteIDs } from "./sidebar";
import { Grid } from "semantic-ui-react";
import MyDashboard from "../routes/MyDashboard";
import Library from "../routes/Library";
import CapabilityLevels from "../routes/CapabilityLevels";
import KnowledgeArea from "../routes/KnowledgeArea";
import LoginPage from "../routes/LoginPage";
import CreateAccount from "../routes/CreateAccount";
import About from "./about";

import Redirect from "./redirect";
import PrivateRoute from "../routes/PrivateRoute";
import Forgot from "../routes/Forgot";
import PersonalLibrary from "../routes/PersonalLibrary";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  state = { isAuthenticated: false, isAdmin: false };

  render() {
    return (
      <div id="app">
        <div id="sidebar-container">
          <SideBar />
        </div>
        <div className={"AppContainer"}>
          <Router onChange={this.handleRoute}>
            <Route path="/about" component={About} />
            <Route path="/" component={CapabilityLevels} />
            <Route path="/createaccount" component={CreateAccount} />
            <Route path="/forgot" component={Forgot} />
            <Route
              path="/:capabilityitem/:knowledgearea?"
              component={KnowledgeArea}
            />
            <Route path="/library" component={Library} />
            <Route path="/login" component={LoginPage} />
            <Route path="/personalLibrary" component={PersonalLibrary} />
          </Router>
        </div>
      </div>
    );
  }
}
