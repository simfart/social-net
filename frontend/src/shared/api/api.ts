import axios from "axios";
import { apiUrl } from "shared/constants";

export const api = axios.create({
  baseURL: apiUrl,
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.withCredentials = true;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
