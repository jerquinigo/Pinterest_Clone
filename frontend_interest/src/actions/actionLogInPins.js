import * as pinsApi from "../Utils/utilPins";

export let RECEIVE_PINS = "RECEIVE_PINS";

export const recievedLoginPins = (pins) => {
  return {
    type: RECEIVE_PINS,
    pins:pins
  }
}


export const fetchAllPins = () => dispatch => {
  return pinsApi
    .fetchAllPins()
    .then(res => {
      return dispatch(recievedLoginPins(res.data.pins));
    })
    .catch(err => {
      console.log(err);
    });
};
