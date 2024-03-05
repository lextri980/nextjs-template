import { getCookie, removeManyStorage, setLocal } from "@/utils";
import axios, { InternalAxiosRequestConfig } from "axios";

const apiService = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 20000,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

apiService.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    let token;
    const authenCookie = getCookie("token");
    if (localStorage["token"]) {
      token = localStorage["token"];
    } else if (authenCookie && authenCookie !== "") {
      token = authenCookie;
    }
    config.headers.Authorization = token;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for API calls
apiService.interceptors.response.use(
  (response) => response,
  (error) => {
    // const originalRequest = error.config;
    // This uses for refresh token
    // if (error.response.status === 403 && !originalRequest._retry) {
    //   originalRequest._retry = true;
    //   const access_token = await refreshAccessToken();
    //   axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
    //   return axiosApiInstance(originalRequest);
    // }
    switch (error.response.status) {
      case 401:
        removeManyStorage(["token", "user"]);
        // store.dispatch(logoutRequest());
        window.location.pathname = "/auth/login";
        setLocal("unauthorized", JSON.stringify(error.response));
        break;
      case 500:
        console.log("in");
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default apiService;
