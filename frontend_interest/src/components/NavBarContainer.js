import {connect} from 'react-redux';
import NavBar from './NavBar.js';
import { logoutUser } from '../actions/actionSession.js'

const mapStateToProps = (state) => {
return{
email: state.email
}
}


const mapDispatchToProps = (dispatch) => {
  return{
    logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
