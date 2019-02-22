import {RECEIVE_USER} from '../actions/actionSession.js'

export const sessionReducer = (oldState = {currentUser:null}, action) => {
Object.freeze(oldState)
switch(action.type){
  case RECEIVE_USER:
  return { currentUser: action.user}
  default:
  return oldState
}

}
