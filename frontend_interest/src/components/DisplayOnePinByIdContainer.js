import {connect} from 'redux';
import DisplayOnePinById from './DisplayOnePinById.js'
import {fetchOnePin} from '../actions/actionPins.js'


const mapStateToProps = state => {
  return {
    pin: Object.values(state.pin)
    // email: state.email
  };
};

const mapDispatchToProps = dispatch => {
  debugger
  return {
    fetchOnePin: (id) => dispatch(fetchOnePin(id))
    // emailLogin: (email) => dispatch(emailLogin(email))
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps)(DisplayOnePinById);
