import { connect } from "react-redux";
import NavBar from "./NavBar.js";
import { logoutUser } from "../actions/actionSession.js";
import { loginUser } from "../actions/actionSession.js";
import { fetchSingleUser } from "../actions/actionSession.js";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  console.log(state, "in the mapstate");
  return {
    currentUser: state.session.currentUser,
    pins: Object.values(state.pins)
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    loginUser: id => dispatch(loginUser(id)),
    fetchSingleUser: id => dispatch(fetchSingleUser(id))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)
);
