import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';


export const loginUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://192.168.0.116:8000/api/login', { email, password });
      const data = response.data;
      if (data.status === 'success') {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data.authorisation,
        });
      } else {
        dispatch({
          type: LOGIN_FAILURE,
          payload: 'Wrong Credentials',
        });
      }
    } catch (error) {
      let errorMessage = 'Network Error';
      if (error.response) {
        // Specific error handling based on backend response
        if (error.response.status === 401) { // Example status code
          errorMessage = "Wrong credentials";
        } else {
          errorMessage = error.response.data.message || errorMessage;
        }
      }
      dispatch({
        type: LOGIN_FAILURE,
        payload: errorMessage,
      });
    }
  };
};
