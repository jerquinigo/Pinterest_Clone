import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import UserProfile from './UserProfile.js'
import {getSingleUserProfile} from '../actions/actionUsers.js'


export const mapStateToProps = (state, ownProps) => {
  return{
  user: state.userProfile[ownProps.match.params.id]
  }
}


export const mapDispatchToProps = (dispatch) => {
  return{
getSingleUserProfile: (id) => dispatch(getSingleUserProfile(id))
  }
}



//need to chenge the mapstatetoprops back to id to get the id but is currently having issues



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserProfile))
