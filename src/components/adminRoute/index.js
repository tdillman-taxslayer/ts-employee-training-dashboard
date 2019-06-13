import { h, Component } from "preact";
import Redirect from "../redirect";

export default class AdminRoute extends Component {
  render() {
    const { component: Comp } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          this.props.isAdmin == true && this.props.isAuthenticated == true ? (
            <Comp {...props} />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
    );
  }
}
const mapStateToProps = state => {
  const { isAuthenticated, isAdmin } = state.auth;
  return { isAuthenticated, isAdmin };
};

/*
export default connect(
  mapStateToProps,
  {}
)(AdminRoute);
*/
