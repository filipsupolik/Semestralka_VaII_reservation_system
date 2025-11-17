import api from "./axiosConfig";

export const requestAuth = (method, url, data) => {
  return api({
    method,
    url: url,
    data,
  });
};