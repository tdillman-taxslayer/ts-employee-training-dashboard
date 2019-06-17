import { route } from "preact-router";
import { h, Component } from "preact";
// import { isLoggedIn } from "../services/auth";

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { component: Component, ...rest } = this.props;

    if (!this.props.auth) {
      // If the user is not logged in, redirect to the login page.
      route("/login", true);
      return null;
    }
    return <Component {...location} {...rest} />;
  }
}

export default PrivateRoute;

/* const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (true) {
    // If the user is not logged in, redirect to the login page.
    route("/login", true);
    return null;
  }
  return <Component {...location} {...rest} />;
};
export default PrivateRoute; */
