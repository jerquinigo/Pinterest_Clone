import {POSTED_ONE_BOARD} from "../actions/actionBoards.js"
import { RECEIVED_BOARDS_SINGLE_USER } from "../actions/actionBoards.js"
import { RECEIVE_PINS } from '../actions/actionPins.js'
import deepClone from 'lodash/cloneDeep';
import merge from 'lodash/merge'

export const boardsReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
   let copiedState = deepClone(oldState)
  switch(action.type){
    case POSTED_ONE_BOARD:
      return normalize(action.postBoard)
    case RECEIVED_BOARDS_SINGLE_USER:
      let theBoards = normalize(action.allBoards)
      return merge({}, oldState, theBoards)
      case RECEIVE_PINS:
        action.pins.forEach(pin => {
          if(copiedState[pin.user_board_id]){
            if(copiedState[pin.user_board_id].pins){
              if(!copiedState[pin.user_board_id].pins.includes(pin.id)){
                copiedState[pin.user_board_id].pins.push(pin.id)
              }
            } else {
              copiedState[pin.user_board_id].pins = [pin.id]
            }
          }else{
              copiedState[pin.user_board_id] = {id: pin.user_board_id, pins: [pin.id]}
            }
        })
        return copiedState
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


// let copiedState = deepClone(oldState)
//  // debugger;
//  switch (action.type) {
//    case RECEIVE_BOARDS:
//      return merge({}, oldState, normalizeData(action.boards));
//    case RECEIVE_PINS:
//    // debugger;
//      action.pins.forEach(pin => {
//        if(copiedState[pin.board_id]){
//          if(copiedState[pin.board_id].pins){
//            if(!copiedState[pin.board_id].pins.includes(pin.id)) {
//              copiedState[pin.board_id].pins.push(pin.id)
//            }
//          } else {
//            copiedState[pin.board_id].pins = [pin.id]
//          }
//        } else {
//          // debugger;
//          // merge({}, oldState, {[pin.board_id]: {id: pin.board_id, pins: [pin.id]}})
//          copiedState[pin.board_id] = {id: pin.board_id, pins: [pin.id]}
//        }
//      })
//      return copiedState;
