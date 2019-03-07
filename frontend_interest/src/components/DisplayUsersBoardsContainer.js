import { connect } from 'react-redux'
import DisplayUsersBoards from './DisplayUsersBoards.js'
import {withRouter} from 'react-router-dom'
import {fetchAllBoardsforOneUser} from '../actions/actionBoards.js'


const mapStateToProps = (state) => {
  return{
    boards: state.boards,
    user: state.session.currentUser
  }
}






const mapDispatchToProps = (dispatch) => {
  // if(!id) return null
    return{
fetchAllBoardsforOneUser: (id) => dispatch(fetchAllBoardsforOneUser(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DisplayUsersBoards))
