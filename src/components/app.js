import { Router, Route, route } from "preact-router";
import { h, Component } from "preact";
import axios from "axios";

// Code-splitting is automated for routes
import { Sidebar, RouteIDs } from "./sidebar";
import { Grid } from "semantic-ui-react";
import MyDashboard from "../routes/MyDashboard";
import Library from "../routes/Library";
import CapabilityLevels from "../routes/CapabilityLevels";
import KnowledgeArea from "../routes/KnowledgeArea";
import CreateAccount from "../routes/CreateAccount";
import Login from "../routes/Login";
import Forgot from "../routes/Forgot";
import About from "../routes/About";
import PersonalLibrary from "../routes/PersonalLibrary";
import PrivateRoute from "../routes/PrivateRoute";

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
          <Sidebar />
        </div>
        <div className={"AppContainer"}>
          <Router onChange={this.handleRoute}>
            <PrivateRoute
              auth={() => authenticating()}
              path="/About"
              component={About}
            />
            <PrivateRoute
              auth={() => authenticating()}
              path="/"
              component={CapabilityLevels}
            />
            <Route path="/createaccount" component={CreateAccount} />
            <PrivateRoute
              auth={() => authenticating()}
              path="/forgot"
              component={Forgot}
            />
            <PrivateRoute
              auth={() => authenticating()}
              path="/:capabilityitem/:knowledgearea?"
              component={KnowledgeArea}
            />
            <PrivateRoute
              auth={() => authenticating()}
              path="/Library"
              component={Library}
            />
            <Route path="/login" component={Login} />
            <PrivateRoute
              auth={() => authenticating()}
              path="/MyDashboard"
              component={MyDashboard}
            />
            <PrivateRoute
              auth={() => authenticating()}
              path="/PersonalLibrary"
              component={PersonalLibrary}
            />
          </Router>
        </div>
      </div>
    );
  }
}

const authenticating = () => {
  console.log(window.localStorage.session);

  if (window.localStorage.session) {
    axios({
      url: "http://localhost:1300/session",
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      data: { token: window.localStorage.session }
    }).then(response => {
      console.log(response.data);

      if (response.data.auth == "true") {
        console.log("Server authenticated");
        return true;
      } else {
        console.log("not auth");

        return false;
      }
    });
  } else {
    return false;
  }
};

// To help with authentication later!
const auth = {
  isAuthenticated: authenticating()
};
