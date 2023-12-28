import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

export const loginUser = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://192.168.0.116:8000/api/login', credentials);
      const data = response.data;
      if (data.status === 'success') {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data.authorisation,
        });
      } else {
        dispatch({
          type: LOGIN_FAILURE,
          payload: data.message,
        });
      }
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.response ? error.response.data : 'Network Error',
      });
    }
  };
};
