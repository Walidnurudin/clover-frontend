import axios from "../../utils/axios";

export const postHire = (data) => {
  return {
    type: "POSTHIRE",
    payload: axios.post("user/hire-pekerja", data)
  };
};
