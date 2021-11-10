import axios from "../../utils/axios";

export const login = (data) => {
  return {
    type: "LOGIN",
    payload: axios.post("auth/login", data)
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
    payload: axios.post("auth/logout")
  };
};

export const callbackForgotPassword = (email) => {
  return {
    type: "CBFORGOTPASS",
    payload: axios.post("auth/callback/forgot-password", { email })
  };
};

export const resetPassword = (id, token, data) => {
  return {
    type: "RESETPASSWORD",
    payload: axios.patch(`auth/forgot-password/${id}/${token}`, data)
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
