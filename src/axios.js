import axios from "axios";

// base url to make the request for movie for database
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
