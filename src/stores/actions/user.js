import axios from "../../utils/axios";

export const postHire = (data) => {
  return {
    type: "POSTHIRE",
    payload: axios.post("user/hire-pekerja", data)
  };
};

export const getAllUser = () => {
  return {
    type: "GET_ALL_USER",
    payload: axios.get("user")
  };
};

export const getUserById = (id) => {
  return {
    type: "GET_USER_BY_ID",
    payload: axios.get(`user/${id}`)
  };
};

export const updateUser = (id, data) => {
  return {
    type: "UPDATE_USER",
    payload: axios.patch(`user/${id}`, data)
  };
};
