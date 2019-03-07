import {connect} from 'react-redux';
import DisplayOnePinById from './DisplayOnePinById.js'
import {fetchOnePin} from '../actions/actionPins.js'
import { withRouter } from 'react-router-dom'
import { createSinglePin } from '../actions/actionPins.js'
import { fetchAllBoardsforOneUser } from '../actions/actionBoards.js'



const mapStateToProps = (state, ownProps) => {

  return {
    pin: state.pins[ownProps.match.params.id],
    boards: state.boards,
    allBoards: state.boards,
    user: state.session.currentUser.id

  };
};

const mapDispatchToProps = dispatch => {

  return {
    fetchOnePin: (id) => dispatch(fetchOnePin(id)),
    fetchAllBoardsforOneUser: (id) => dispatch(fetchAllBoardsforOneUser(id)),
    createSinglePin: (pin) => dispatch(createSinglePin(pin))
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps)(DisplayOnePinById));
