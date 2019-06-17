import { Component } from "preact";
import { Router, Route, route } from "preact-router";

// Code-splitting is automated for routes

import KnowledgeArea from "../routes/KnowledgeArea";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Create from "../routes/Create";
import Forgot from "../routes/Forgot";
import Library from "../routes/Library";

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
        {/* <div id="sidebar-container">
          <SideBar />
        </div> */}
        <div className={"AppContainer"}>
          <Router onChange={this.handleRoute}>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/create" component={Create} />
            <Route path="/forgot" component={Forgot} />
            <Route path="/library" component={Library} />

            <Route
              path="/:capabilityitem/:knowledgearea?"
              component={KnowledgeArea}
            />
          </Router>
        </div>
      </div>
    );
  }
}
