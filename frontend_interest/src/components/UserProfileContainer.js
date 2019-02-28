import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import UserProfile from './UserProfile.js'
import {getSingleUserProfile} from '../actions/actionUsers.js'


export const mapStateToProps = (state) => {
  return{
  user: state.userProfile.user.id
  }
}


export const mapDispatchToProps = (dispatch) => {
  return{
getSingleUserProfile: (user) => dispatch(getSingleUserProfile(user))
  }
}



//need to chenge the mapstatetoprops back to id to get the id but is currently having issues



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserProfile))
