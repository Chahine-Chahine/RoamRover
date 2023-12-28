import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';


import { REGISTER_SUCCESS, REGISTER_FAILURE } from './actionTypes';

// Signup action
export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://192.168.0.116:8000/api/register', userData);
      const data = response.data;
      if (data.status === 'success') {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: data.user, // Assuming the API returns the user data on successful registration
        });
      } else {
        dispatch({
          type: REGISTER_FAILURE,
          payload: "Registration failed. Please try again.",
        });
      }
    } catch (error) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: error.response ? error.response.data.message : 'Network Error',
      });
    }
  };
};



// login Action
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
        if (error.response.status === 401) { 
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
