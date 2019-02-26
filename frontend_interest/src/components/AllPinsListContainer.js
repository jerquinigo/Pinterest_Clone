import {connect} from 'react-redux'
import AllPinsList from './AllPinsList.js'
import { fetchOnePin } from '../actions/actionPins.js'


const mapStateToProps = state => {
  return {
    pin: Object.values(state.pin)

  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOnePin: (id) => dispatch(fetchOnePin(id))
    // emailLogin: (email) => dispatch(emailLogin(email))
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(AllPinsList)
