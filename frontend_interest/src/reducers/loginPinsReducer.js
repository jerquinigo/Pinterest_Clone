import {RECEIVE_PINS} from '../actions/actionLogInPins.js'

export const loginPinsReducer = (oldState = [], action) => {
  // debugger
  switch(action.type){
    case RECEIVE_PINS:
    return noramalize(action.pins);
    default:
    return oldState
  }
}


function noramalize(arr) {
  let obj = {};
  arr.forEach(el => {
    obj[el.id] = el
  })
  return obj
}

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
