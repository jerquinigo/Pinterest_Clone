import { RECEIVE_PINS, RECEIVE_ONE_PIN ,RECEIVE_PINS_FOR_USER  } from "../actions/actionPins.js";


import merge from 'lodash/merge'


export const pinsReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_PINS:
      return normalize(action.pins);
    case RECEIVE_ONE_PIN:
      return merge({}, oldState, {[action.pin.id]:  action.pin})
    case RECEIVE_PINS_FOR_USER:
    debugger;
    let singleUserPins = normalize(action.userPins)
      return merge({}, oldState, singleUserPins )
    // break;
    default:
      return oldState;
  }
};

function normalize(arr) {
  let obj = {};
  arr.forEach(el => {
    obj[el.id] = el
  })
  return obj
}
