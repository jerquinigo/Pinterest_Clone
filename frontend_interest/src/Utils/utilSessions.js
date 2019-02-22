import axios from "axios";

export const newUser = (user) => {
  return axios.post("/users/new", user)

}

export const loginUser = (user) => {
  return axios.get("/users/isLoggedIn")
} 
