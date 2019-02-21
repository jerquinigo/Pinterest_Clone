import * as pinsApi from "../Utils/utilPins";
export let TOGGLE = "TOGGLE"
export let RECEIVE_PINS = "RECEIVE_PINS";

export const toggleFormStatus = () => {
  return{
    type: TOGGLE,
  }
}

export const recievedLoginPins = (pins) => {
  return {
    type: RECEIVE_PINS,
    pins:pins
  }
}
