import axios from "axios";

export const fetchAllPins = () => {
  return axios.get("/api/pins");
};

export const fetchSinglePin = (id) => {
  return axios.get(`/api/pins/${id}`);
}

export const createSinglePin = (pins) => {
  return axios.post("/api/pins", pins);
}

export const fetchAllPinsForSingleUser = (id) => {
  return axios.get(`/api/pins/user/${id}`)
}
