import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import UserProfile from './UserProfile.js'
import {getSingleUserProfile} from '../actions/actionUsers.js'
import {createSinglePin} from '../actions/actionPins.js'
import { createBoard } from '../actions/actionBoards.js'


export const mapStateToProps = (state, ownProps) => {
  return{
  user: state.userProfile[ownProps.match.params.id],
  pin: state.pins,
  boards: state.boards
  }
}


export const mapDispatchToProps = (dispatch) => {
  return{
getSingleUserProfile: (id) => dispatch(getSingleUserProfile(id)),
createSinglePin: (pin) => dispatch(createSinglePin(pin)),
createBoard: (board) => dispatch(createBoard(board))

  }
}



//need to chenge the mapstatetoprops back to id to get the id but is currently having issues



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserProfile))
