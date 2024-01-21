import axios from 'axios';
import { baseUrl } from './baseUrl'; 

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default axiosInstance;
