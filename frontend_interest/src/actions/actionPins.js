import * as pinsApi from "../Utils/utilPins";

export let RECEIVE_PINS = "RECEIVE_PINS";

export const receivedPins = pins => {
  // debugger;
  return {
    type: RECEIVE_PINS,
    pins: pins
  };
};

export const fetchAllPins = () => dispatch => {
  return pinsApi
    .fetchAllPins()
    .then(res => {
      // debugger;
      return dispatch(receivedPins(res.data.pins));
    })
    .catch(err => {
      console.log(err);
    });
};
