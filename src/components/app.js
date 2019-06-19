import { Router, Route, route } from "preact-router";
import { h, Component } from "preact";

// Code-splitting is automated for routes
import SideBar, { RouteIDs } from "./sidebar";
import { Grid } from "semantic-ui-react";
import MyDashboard from "../routes/MyDashboard";
import Library from "../routes/Library";
import CapabilityLevels from "../routes/CapabilityLevels";
import KnowledgeArea from "../routes/KnowledgeArea";
import CreateAccount from "../routes/CreateAccount";
import Login from "../routes/Login";
import Forgot from "../routes/Forgot";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <div id="sidebar-container">
          <SideBar />
        </div>
        <div className={"AppContainer"}>
          <Router onChange={this.handleRoute}>
            <Route path="/" component={CapabilityLevels} />
            <Route path="/createaccount" component={CreateAccount} />
            <Route path="/forgot" component={Forgot} />
            <Route
              path="/:capabilityitem/:knowledgearea?"
              component={KnowledgeArea}
            />
            <Route path="/login" component={Login} />
          </Router>
        </div>
      </div>
    );
  }
}

// To help with authentication later!
const auth = {
  isAuthenticated: false,
};
