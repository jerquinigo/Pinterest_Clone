import * as session from '../Utils/utilSessions.js'
import Auth from '../Utils/utilAuth.js'
// import PrivateRoute from '../Utils/utilAuthRouting.js'

export let RECEIVE_USER = "RECEIVE_USER"
export const recieveUser = (user) => {
  return {
  type: RECEIVE_USER,
  user: user
  }
}


export const newUser = (user) => dispatch =>  {
  return session.newUser(user)
  .then(response => {
    return dispatch(recieveUser(response.data.user))
  })

}

export const loginUser = (user) => dispatch =>  {
  return session.loginUser(user)
  .then(response => {

  Auth.authenticateUser(response.data.email)
  return dispatch(recieveUser(response.data.email))
}).catch(err => {
  Auth.deauthenticateUser(err)
})
}
