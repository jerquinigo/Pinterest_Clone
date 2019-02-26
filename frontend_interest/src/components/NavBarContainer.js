import { connect } from "react-redux";
import NavBar from "./NavBar.js";
import { logoutUser } from "../actions/actionSession.js";
import { loginUser } from "../actions/actionSession.js";

const mapStateToProps = state => {
  console.log(state)
  return {
    currentUser: state.session.currentUser
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    loginUser: user => dispatch(loginUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
