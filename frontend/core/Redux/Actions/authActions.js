import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';
import { REGISTER_SUCCESS, REGISTER_FAILURE } from './actionTypes';
import  {LOGOUT, UPDATE_SUCCESS, UPDATE_FAILURE } from './actionTypes';

// Signup action
export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      console.log('entered the try')
      const response = await axios.post('http://192.168.43.29:8000/api/register', userData);
      console.log('after the response')
      console.log('the response: ' , response)
      const data = response.data;
      console.log("data: ", data)
      if (data.status === 'success') {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: data.user, 
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
      const response = await axios.post('http://192.168.43.29:8000/api/login', { email, password });
      const data = response.data;
      if (data.status === 'success') {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            token: data.token, 
            user: data.user, 
          }});
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

// Logout action
export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
  };
};

// Update user action
export const updateUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put('http://192.168.43.29:8000/api/update', userData);
      const data = response.data;
      if (data.status === 'success') {
        dispatch({
          type: UPDATE_SUCCESS,
          payload: data.user,
        });
      } else {
        dispatch({
          type: UPDATE_FAILURE,
          payload: "Update failed. Please try again.",
        });
      }
    } catch (error) {
      dispatch({
        type: UPDATE_FAILURE,
        payload: error.response ? error.response.data.message : 'Network Error',
      });
    }
  };
};