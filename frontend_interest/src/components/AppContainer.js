import {connect} from 'react-redux';
import App from '../App.js'
import {checkAuthenticationStatus} from '../actions/actionSession.js'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return{
    currentUser:state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuthenticationStatus: () => dispatch(checkAuthenticationStatus())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
