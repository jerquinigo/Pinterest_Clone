import { combineReducers } from "redux";
import { pinsReducer } from "./pinsReducer.js";
import { loginPinsReducer } from "./loginPinsReducer.js"
import { toggleFormReducer } from "./toggleFormReducer.js"
import { sessionReducer } from "./sessionReducer.js"

const rootReducer = combineReducers({
  pins: pinsReducer,
  loginPins: loginPinsReducer,
  toggle: toggleFormReducer,
  session: sessionReducer

});

export default rootReducer;
