import {RECEIVE_PINS} from '../actions/actionLogInPins.js'

import merge from 'lodash/merge'

export const loginPinsReducer = (oldState = {}, action) => {
  // debugger
  Object.freeze(oldState)
  switch(action.type){
    case RECEIVE_PINS:
    return normalize(action.pins);
    case "RECEIVE_ONE_PIN":
    return merge({}, oldState, {[action.pin.id]: action.pins })
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
//how merge works
// {}
// {1: {id: 1}}
// {1: {id: 1}}
// {2: {id: 2}}
// {1: {id: 1}, 2: {id: 2}}



// {
//   1: {id: 1, pin_url: "httlejlkfsj"} // normalalized state
// }
//
// Object.values(state.pins) // in connect

// let newState = {...oldState }
// delete newState[action.pinId]
// return newState
//
// return oldState.filter(pin => pin.id !== action.pinId)
