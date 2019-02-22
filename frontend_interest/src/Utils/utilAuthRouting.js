import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import Auth from "./utilAuth.js";

const Authorize  = ({ component: Component, path, loggedIn }) => {

  return <Route
    path={path}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to={"/home"} />
    }
  />
};

const mapStateToProps = (state) => {
  return {
    loggedIn: Auth.isUserAuthenticated(),
  }
}

export const AuthRoute = withRouter(connect(mapStateToProps,null)(Authorize))
