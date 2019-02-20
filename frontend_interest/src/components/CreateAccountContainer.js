import {connect} from 'react-redux';
import CreateAccount from './CreateAccount.js'
import {fetchAllPins} from '../actions/actionLogInPins.js';
import LoginCreateAccountSwitch from './LoginCreateAccountSwitch.js'
const mapStateToProps = (state) => {
  // debugger
  return {
    loginPins: Object.values(state.pins)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPins: () => dispatch(fetchAllPins())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginCreateAccountSwitch)

//originally CreateAccount was connected
