import { combineReducers } from "redux";
import { pinsReducer } from "./pinsReducer.js";

const rootReducer = combineReducers({
  pins: pinsReducer
});

export default rootReducer;
