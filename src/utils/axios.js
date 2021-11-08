import axios from "axios";

const interceptorAxios = axios.create({
  baseURL: "http://localhost:3001/"
});

axios.interceptors.request.use(
  function (config) {
    // Set Up Config authorization bearer
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default interceptorAxios;
