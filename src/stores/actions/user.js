import axios from "../../utils/axios";

export const getAllUsers = (page, limit) => {
  return {
    type: "GETALLUSERS",
    payload: axios.get(`user?page=${page}&limit=${limit}`)
  };
};

export const postHire = (data) => {
  return {
    type: "POSTHIRE",
    payload: axios.post("user/hire-pekerja", data)
  };
};

export const searchUsers = (search, page, limit) => {
  return {
    type: "SEARCHUSERS",
    payload: axios.get(`user?searchSkill=${search}&page=${page}&limit=${limit}`)
  };
};

export const sortSkillUsers = (sort, page, limit) => {
  return {
    type: "SORTSKILL",
    payload: axios.get(`user?sortByName=skill ${sort}&page=${page}&${limit}`)
  };
};
export const sortNameUsers = (sort, page, limit) => {
  return {
    type: "SORTNAME",
    payload: axios.get(`user?sortByName=nama ${sort}&page=${page}&${limit}`)
  };
};
export const sortLocationUsers = (sort, page, limit) => {
  return {
    type: "SORTLOCATION",
    payload: axios.get(`user?sortByName=domisili ${sort}&page=${page}&${limit}`)
  };
};

export const getUserProfile = (id) => {
  return {
    type: "GET_PROFILE",
    payload: axios.get(`user/${id}`)
  };
};

export const getUserById = (id) => {
  return {
    type: "GET_USER_BY_ID",
    payload: axios.get(`user/${id}`)
  };
};

export const updateUserImage = () => {
  return {
    type: "UPDATE_USER_IMAGE",
    payload: axios.patch("user/update-image")
  };
};

export const updateUser = (data) => {
  return {
    type: "UPDATE_USER",
    payload: axios.patch("user", data)
  };
};
