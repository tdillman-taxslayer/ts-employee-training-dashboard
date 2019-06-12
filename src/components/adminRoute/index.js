import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

class AdminRoute extends Component {
  render() {
    const { component: Comp } = this.props;
    return (
      <Route
        render={props => {
          return this.props.isAdmin == true &&
            this.props.isAuthenticated == true ? (
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
export default connect(
  mapStateToProps,
  {}
)(AdminRoute);
