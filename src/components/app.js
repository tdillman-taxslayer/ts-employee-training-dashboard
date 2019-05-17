import { h, Component } from "preact";
import { Router } from "preact-router";

// Code-splitting is automated for routes
import SideBar from "./sidebar";
import { Grid } from "semantic-ui-react";
import MyDashboard from "../routes/MyDashboard";

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
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <SideBar />
            </Grid.Column>
            <Grid.Column>
              <div className={"AppContainer"}>
                <Router onChange={this.handleRoute}>
                  <MyDashboard path="/" />
                </Router>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
