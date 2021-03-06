import { connect } from "react-redux";
import { toggleFormStatus } from "../actions/loginCreateButtonAction.js";
import UserAuth from './UserAuth.js'
import {fetchAllPins} from '../actions/actionLogInPins.js'
import { newUser,loginUser } from '../actions/actionSession.js'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  console.log(state);
  return {
    toggle: state.toggle,
    pins: Object.values(state.pins),
    currentUser: state.session.currentUser
  };
};
const mapDispatchToProps = dispatch => {
  // console.log(dispatch(fetchAllPins()));
  return {
    toggleForm: () => dispatch(toggleFormStatus()),
    fetchAllPins: () => dispatch(fetchAllPins()),
    newUser: (user) => dispatch(newUser(user)),
    loginUser: (user) => dispatch(loginUser(user))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAuth));
