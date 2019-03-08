import * as boardsApi from "../Utils/utilBoards.js"

export let POSTED_ONE_BOARD = "POSTED_ONE_BOARD"
export let RECEIVED_BOARDS_SINGLE_USER = "RECEIVED_BOARDS_SINGLE_USER"

export const postedOneBoard = (postBoard) => {
  return {
    type: POSTED_ONE_BOARD,
    postBoard: postBoard
  }
}

export const recievedUserBoards = (allBoards) => {
  return {
    type: RECEIVED_BOARDS_SINGLE_USER,
    allBoards: allBoards
  }
}

export const createBoard = (board) => dispatch => {
  return boardsApi
  .createBoard(board)
  .then(res => {
    return dispatch(postedOneBoard(res.data.board))
  })
  .catch(err => {
    console.log(err);
  });
}

export const fetchAllBoardsforOneUser = (id) => dispatch => {
  return boardsApi
  .fetchOneUsersBoards(id)
  .then(res => {
    return dispatch(recievedUserBoards(res.data.boards))
  })
  .catch(err => {
    console.log(err);
  });
}

export const getPinsByBoardId = (id) => dispatch => {
  return boardsApi
  .getPinsByBoardId(id)
  .then(res => {
    return dispatch(recievedUserBoards(res.data.pins))
  })
}
