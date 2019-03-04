import {POSTED_ONE_BOARD} from "../actions/actionBoards.js"

import merge from 'lodash/merge'

export const boardsReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  switch(action.type){
    case POSTED_ONE_BOARD:
      return normalize(action.postBoard)
      default:
      return oldState
  }
}

function normalize(arr) {
  let obj = {};
  arr.forEach(el => {
    obj[el.id] = el
  })
  return obj
}
