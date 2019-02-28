
import {GET_USER} from '../actions/actionUsers.js'

export const getUserReducer = (oldState={}, action) => {
  switch(action.type){
    case GET_USER:
    return {userProfile: action.user}
    default:
    return oldState
  }
}
