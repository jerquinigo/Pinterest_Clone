import axios from 'axios'

export const createBoard = (board) => {
return axios.post("/api/boards", board)
}

export const fetchOneUsersBoards = (id) => {
  return axios.get(`/api/boards/${id}`)
}

export const getPinsByBoardId = (id) => {
  return axios.get(`/api/boards/pins/${id}`)
}
