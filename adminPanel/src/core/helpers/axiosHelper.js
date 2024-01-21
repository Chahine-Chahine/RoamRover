import axios from 'axios';

// eslint-disable-next-line no-unused-vars
const api = axios.create({
  baseURL: 'http://192.168.43.29:8000/api', 
  headers: {
    'Content-Type': 'application/json',
  }
});
