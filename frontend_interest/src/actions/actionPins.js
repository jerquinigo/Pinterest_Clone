import * as pinsApi from "../Utils/utilPins";

export let RECEIVE_PINS = "RECEIVE_PINS";
export let RECEIVE_ONE_PIN = "RECEIVE_ONE_PIN";

export const receivedPins = pins => {
  return {
    type: RECEIVE_PINS,
    pins: pins
  }
}


export const recieveOnePin = (pin) => {
  return {
    type: RECEIVE_ONE_PIN,
    pin: pin
  }
}

export const fetchAllPins = () => dispatch => {
  return pinsApi
    .fetchAllPins()
    .then(res => {
      return dispatch(receivedPins(res.data.pins));
    })
    .catch(err => {
      console.log(err);
    });
};


export const fetchOnePin = (id) => dispatch => {
  return pinsApi
  .fetchSinglePin(id)
  .then(res => {
    return dispatch(recieveOnePin(res.data.pin))
  })
  .catch(err => {
    console.log(err);
  });
}
