import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import DisplayBoardItems from './DisplayBoardItems.js'
import { fetchAllPinsForSingleUser } from '../actions/actionPins.js'
import { fetchAllBoardsforOneUser, getPinsByBoardId } from '../actions/actionBoards.js'


const mapStateToProps = (state) => {
  return{
    pins: state.pins,
    currentUser: state.session.currentUser,
    boards: state.boards
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
fetchAllPinsForSingleUser: (id) => dispatch(fetchAllPinsForSingleUser(id)),
fetchAllBoardsforOneUser: (id) => dispatch(fetchAllBoardsforOneUser(id)),
getPinsByBoardId: (id) => dispatch(getPinsByBoardId(id))
  }

}



export default connect(mapStateToProps, mapDispatchToProps)(DisplayBoardItems)
