import { Router, Route, route } from "preact-router";
import { h, Component } from "preact";

// Code-splitting is automated for routes
import SideBar from "./sidebar";
import MyDashboard from "../routes/MyDashboard";
import Library from "../routes/Library";
import CapabilityLevels from "../routes/CapabilityLevels";
import KnowledgeArea from "../routes/KnowledgeArea";
import CreateAccount from "../routes/CreateAccount";
import Login from "../routes/Login";
import Forgot from "../routes/Forgot";
import About from "../routes/About";
import PersonalLibrary from "../routes/PersonalLibrary";
import Activities from "../routes/Activities";

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
            <Route path="/" component={MyDashboard} />
            <Route path="/About" component={About} />
            <Route path="/Library" component={Library} />
            <Route path="/createaccount" component={CreateAccount} />
            <Route path="/MyDashboard" component={MyDashboard} />
            <Route
              path="/:capabilityitem/:knowledgearea"
              component={KnowledgeArea}
            />
            <Route path="/login" component={Login} />
            <Route path="/forgot" component={Forgot} />
            <Route path="/Activities" component={Activities} />
            <Route path="/PersonalLibrary" component={PersonalLibrary} />
          </Router>
        </div>
      </div>
    );
  }
}

// To help with authentication later!
const auth = {
  isAuthenticated: false
};
