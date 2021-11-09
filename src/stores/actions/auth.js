import axios from "../../utils/axios";

export const login = (data) => {
  return {
    type: "LOGIN",
    payload: axios.post("auth/login", data)
  };
};
export const registerWorkers = (data) => {
  return {
    type: "REGISTER_WORKERS",
    payload: axios.post("auth/register/pekerja", data)
  };
};
export const registerRecruiters = (data) => {
  return {
    type: "REGISTER_RECRUITERS",
    payload: axios.post("auth/register/perekrut", data)
  };
};
