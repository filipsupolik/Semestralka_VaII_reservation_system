export const requestAuth = (method, url, data) => {
  return axios({
    method,
    url: url, 
    data,
  });
};