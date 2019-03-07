import * as session from '../Utils/utilSessions.js'
import * as userSession from '../Utils/utilUsers.js'
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
  return dispatch(recieveUser(response.data))
}).catch(err => {

  Auth.deauthenticateUser()
})
}

export const logoutUser = () => dispatch => {
  return session.logoutUser()
  .then(() => {
    Auth.deauthenticateUser()
    return dispatch(recieveUser(null))
  }).catch(err => {

    Auth.deauthenticateUser()
  })
}





export const checkAuthenticationStatus = () =>
 dispatch =>  {
  return session.isLoggedIn()
  .then(res => {
    if(res.data.email.email === Auth.getToken()){
      return dispatch(recieveUser(res.data.email))
    }
  }).catch(err => {

    Auth.deauthenticateUser()
  })
}


export const fetchSingleUser = (id) => dispatch => {
 return userSession.fetchSingleUser(id)
 .then(user => {
   return dispatch(recieveUser(user.data))
 }).catch(err => {
   console.log(err)
 })
}
