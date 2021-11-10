import axios from "axios";
const interceptorAxios = axios.create({
  baseURL: `${
    process.env.REACT_APP_NAME === "dev" ? process.env.REACT_APP_DEV : process.env.REACT_APP_PROD
  }`
});

interceptorAxios.interceptors.request.use(
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

interceptorAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default interceptorAxios;
