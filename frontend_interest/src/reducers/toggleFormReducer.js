import {TOGGLE} from '../actions/loginCreateButtonAction.js'
export const toggleFormReducer = (oldState=false ,action) => {
 switch(action.type){
   case TOGGLE:
   return !oldState;
   default:
   return oldState;
 }
}
