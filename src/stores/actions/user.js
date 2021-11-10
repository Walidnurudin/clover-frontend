import axios from "../../utils/axios";

export const getAllUsers = (role, page, limit) => {
  return {
    type: "GETALLUSERS",
    payload: axios.get(`user?role=${role}&page=${page}&limit=${limit}`)
  };
};

export const postHire = (data) => {
  return {
    type: "POSTHIRE",
    payload: axios.post("user/hire-pekerja", data)
  };
};

export const searchUsers = (role, search, page, limit) => {
  return {
    type: "SEARCHUSERS",
    payload: axios.get(`user?role=${role}&searchSkill=${search}&page=${page}&limit=${limit}`)
  };
};

export const sortSkillUsers = (role, sort, page, limit) => {
  return {
    type: "SORTSKILL",
    payload: axios.get(`user?role=${role}&sortByName=skill ${sort}&page=${page}&${limit}`)
  };
};
export const sortNameUsers = (role, sort, page, limit) => {
  return {
    type: "SORTNAME",
    payload: axios.get(`user?role=${role}&sortByName=nama ${sort}&page=${page}&${limit}`)
  };
};
export const sortLocationUsers = (role, sort, page, limit) => {
  return {
    type: "SORTLOCATION",
    payload: axios.get(`user?role=${role}&sortByName=domisili ${sort}&page=${page}&${limit}`)
  };
};

export const sortFullTimeJobUsers = (role, jobSort, page, limit) => {
  return {
    type: "SORTFULLTIMEJOB",
    payload: axios.get(`user?role=${role}&jobStatus=${jobSort}&page=${page}&limit=${limit}`)
  };
};

export const getUserById = (id) => {
  return {
    type: "GET_USER_BY_ID",
    payload: axios.get(`user/${id}`)
  };
};

export const updateUser = (data) => {
  return {
    type: "UPDATE_USER",
    payload: axios.patch("user", data)
  };
};
