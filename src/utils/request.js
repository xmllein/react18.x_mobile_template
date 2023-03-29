import axios from 'axios';

let baseURL = '';
if (process.env.REACT_APP_ENV === 'development') {
  baseURL = 'http://localhost:3000';
} else if (process.env.REACT_APP_ENV === 'production') {
  baseURL = 'http://yourdomain.com';
} else if (process.env.REACT_APP_ENV === 'mock') {
  baseURL = 'http://localhost:3004';
}

const service = axios.create({
  baseURL,
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
