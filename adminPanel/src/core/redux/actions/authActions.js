import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../../helpers/actionTypes'; 

export const loginUser = (email , password) => {
  return async (dispatch) => {
    try {
      console.log('Login request data:', { email, password });  // Log data being sent
      const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
      if (response.data.status === 'success') {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: LOGIN_FAILURE,
          payload: 'Login failed. Please try again.',
        });
      }
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.response ? error.response.data.message : 'Login failed. Please try again later.',
      });
    }
  };
};
