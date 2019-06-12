import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

// import { h, Component } from "preact";
// import { Router, Route, route } from "preact-router";

// Code-splitting is automated for routes
import SideBar, { RouteIDs } from "./sidebar";
import { Grid } from "semantic-ui-react";
import MyDashboard from "../routes/MyDashboard";
import Library from "../routes/Library";
import CapabilityLevels from "../routes/CapabilityLevels";
import KnowledgeArea from "../routes/KnowledgeArea";
import LoginPage from "./loginPage";
import CreateAccount from "./createAccount";
import About from "./about";
// import AdminRoute from "./adminRoute";

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
            <Route path="/login" component={LoginPage} />
            <Route path="/createaccount" component={CreateAccount} />
            <Route
              path="/:capabilityitem/:knowledgearea?"
              component={KnowledgeArea}
            />
            <Route path="/about" component={About} />
          </Router>
        </div>
      </div>
    );
  }
}
