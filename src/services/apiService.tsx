import axios from "axios";

const apiService = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 20000,
});

export default apiService;
