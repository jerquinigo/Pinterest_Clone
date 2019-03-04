import * as boardsApi from "../Utils/utilBoards.js"

export let POSTED_ONE_BOARD = "POSTED_ONE_BOARD"

export const postedOneBoard = (postBoard) => {
  return {
    type: POSTED_ONE_BOARD,
    postBoard: postBoard
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
