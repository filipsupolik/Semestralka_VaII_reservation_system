import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor attaches token from sessionStorage
api.interceptors.request.use(
  (config) => {
    try {
      const token = sessionStorage.getItem("authToken");
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (e) {
      // ignore
    }
    return config;
  },
  (error) => Promise.reject(error)
);



// Response interceptor: if 401 occurs, remove token and notify app
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    if (status === 401) {
      try {
        sessionStorage.removeItem("authToken");
      } catch (e) {
        // ignore
      }
      // dispatch a global event so AuthContext can react and logout
      try {
        window.dispatchEvent(new CustomEvent("auth:logout"));
      } catch (e) {
        // ignore
      }
    }
    return Promise.reject(error);
  }
);

export default api;
