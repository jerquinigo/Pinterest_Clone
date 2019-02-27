import {connect} from 'react-redux';
import DisplayOnePinById from './DisplayOnePinById.js'
import {fetchOnePin} from '../actions/actionPins.js'


const mapStateToProps = (state, ownProps) => {
  return {
    pin: state.pins[ownProps.match.params.id]

  };
};

const mapDispatchToProps = dispatch => {

  return {
    fetchOnePin: (id) => dispatch(fetchOnePin(id))
    // emailLogin: (email) => dispatch(emailLogin(email))
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps)(DisplayOnePinById);
