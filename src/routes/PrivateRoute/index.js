import { route } from "preact-router";
// import { isLoggedIn } from "../services/auth";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (true) {
    // If the user is not logged in, redirect to the login page.
    route("/login", true);
    return null;
  }
  return <Component {...location} {...rest} />;
};
export default PrivateRoute;
