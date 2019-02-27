import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Auth from "./utilAuth.js";

const Authorize = ({ component: Component, path, loggedIn }) => {
  return (
    <Route
      exact
      path={path}
      render={props => {
        return !loggedIn ? <Component {...props} /> : <Redirect to={"/home"} />;
      }}
    />
  );
};

const Protected = ({ component: Component, path, loggedIn }) => {
  return (
    <Route
      path={path}
      render={props => {
        return loggedIn ? <Component {...props} /> : <Redirect to={"/"} />;
      }}
    />
  );
};

const mapStateToProps = state => {
  // debugger
  return {
    loggedIn: Auth.isUserAuthenticated()
  };
};

export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Authorize)
);

export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Protected)
);
