import * as session from '../Utils/utilUsers.js'


export let GET_USER = "GET_USER";

export const getUser = (user) => {
  return{
  type: GET_USER,
  user: user
  }
}

export const getSingleUserProfile = (id) => dispatch =>  {

  return session.fetchSingleUser(id)
  .then(res => {
    return dispatch(getUser(res.data.user))
  }).catch(err => {
      console.log(err);
    });

}
