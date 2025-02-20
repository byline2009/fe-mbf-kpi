import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const API = axios.create({
  baseURL: `${API_URL}`,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
