import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "https://58e8ea98-f35f-4fc0-b33a-1a04a5b77aa3-dev.e1-eu-north-azure.choreoapis.dev/reackxdjagno/backend-pwb/v1";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
