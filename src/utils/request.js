import axios from 'axios';

const service = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  // mock
  baseURL: 'http://localhost:3004',
  timeout: 5000,
}); // Request interceptors

service.interceptors.request.use(
  (config) => {
    // do something
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  },
); // Response interceptors

service.interceptors.response.use(
  async (response) => {
    // do something
    return response.data;
  },
  (error: any) => {
    // do something
    return Promise.reject(error);
  },
);

export default service;
