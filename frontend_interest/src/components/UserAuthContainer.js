import { connect } from "react-redux";
import { toggleFormStatus } from "../actions/loginCreateButtonAction.js";
import UserAuth from './UserAuth.js'
import {fetchAllPins} from '../actions/actionLogInPins.js'

const mapStateToProps = state => {
  console.log(state);
  return {
    toggle: state.toggle,
    pins: state.pins
  };
};
const mapDispatchToProps = dispatch => {
  console.log(dispatch(fetchAllPins()));
  return {
    toggleForm: () => dispatch(toggleFormStatus()),
    fetchAllPins: () => dispatch(fetchAllPins()),


  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAuth);
