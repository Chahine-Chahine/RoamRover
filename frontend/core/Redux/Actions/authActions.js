import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';
import { REGISTER_SUCCESS, REGISTER_FAILURE } from './actionTypes';
import  {LOGOUT, UPDATE_SUCCESS, UPDATE_FAILURE } from './actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';


const baseUrl = 'http://192.168.0.116';

// Signup action
export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      console.log('entered the try')
      const response = await axios.post(`${baseUrl}:8000/api/register`, userData);
      console.log('after the response')
      console.log('the response: ' , response)
      const data = response.data;
      if (data.status === 'success' && data.authorisation && data.authorisation.token) {
        await AsyncStorage.setItem('userToken', data.authorisation.token);
        dispatch({
          type: REGISTER_SUCCESS,
          token: data.authorisation.token,
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
      const response = await axios.post(`${baseUrl}:8000/api/login`, { email, password });
      const data = response.data;
      if (data.status === 'success' && data.authorisation && data.authorisation.token) {
        await AsyncStorage.setItem('userToken', data.authorisation.token);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            token: data.authorisation.token, 
            user: data.user, 
          }
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

// Logout action
export const logoutUser = (navigation) => {
  return async (dispatch) => {
    await AsyncStorage.removeItem('userToken'); 
    dispatch({ type: LOGOUT });
    navigation.reset({
      index: 0,
      routes: [{ name: 'Signin' }],
    });
  };
};

// Function to get the stored token
const getToken = async () => {
  try {
    return await AsyncStorage.getItem('userToken');
  } catch (error) {
    console.error('Error getting token from AsyncStorage:', error);
    return null;
  }
};

// Update user action
export const updateUser = (userId, userData) => {
  return async (dispatch) => {
    try {
      const token = await getToken();
      if (!token) {
        throw new Error('No token found');
      }
      const response = await axios.put(`${baseUrl}:8000/api/update/${userId}`, userData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

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