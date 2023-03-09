import axios from "axios";

const apiURL = process.env.REACT_APP_API_URL;

export async function getSearch(name) {
  return axios.get(`${apiURL}/movies/search/?s=${name}`);
}

export async function getMovie(name) {
  return axios.get(`${apiURL}/movies/?t=${name}`);
}