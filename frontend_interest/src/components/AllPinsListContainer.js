import {connect} from 'react-redux'
import AllPinsList from './AllPinsList.js'
import { fetchOnePin } from '../actions/actionPins.js'
import { withRouter } from 'react-router-dom'


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


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AllPinsList))
