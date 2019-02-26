import { RECEIVE_ONE_PIN } from "../actions/actionPins.js";

export const getOnePinReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_ONE_PIN:
      return action.pin;
    default:
      return oldState;
  }
};
