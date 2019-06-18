import { h, Component } from "preact";
import { Router, Route, route } from "preact-router";

// Code-splitting is automated for routes
import SideBar, { RouteIDs } from "./sidebar";
import { Grid } from "semantic-ui-react";
import MyDashboard from "../routes/MyDashboard";
import Library from "../routes/Library";
import CapabilityLevels from "../routes/CapabilityLevels";
import KnowledgeArea from "../routes/KnowledgeArea";
import Create from "../routes/Create";
import Login from "../routes/Login";

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
            <Route path="/library" component={Library} />
            <Route
              path="/:capabilityitem/:knowledgearea?"
              component={KnowledgeArea}
            />
            <Route path="/create" component={Create} />
            <Route path="/login" component={Login} />
            <Route path="/forgot" component={Forgot} />
          </Router>
        </div>
      </div>
    );
  }
}
