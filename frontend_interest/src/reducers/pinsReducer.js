import { RECEIVE_PINS } from "../actions/actionPins.js";

export const pinsReducer = (oldState = [], action) => {
  // debugger;
  switch (action.type) {
    case RECEIVE_PINS:
      return action.pins;
    // break;
    default:
      return oldState;
  }
};
