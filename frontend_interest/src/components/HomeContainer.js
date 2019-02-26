import { connect } from 'react-redux';
import Home from './Home';
import { fetchAllPins } from "../actions/actionPins.js";
// import {emailLogin} from "../actions/actionDisplayLoginName.js"
const mapStateToProps = state => {
  return {
    pins: Object.values(state.pins),
    // email: state.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPins: () => dispatch(fetchAllPins())
    // emailLogin: (email) => dispatch(emailLogin(email))
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps)(Home);
