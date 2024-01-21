import axiosInstance from '../../helpers/axiosHelper';
import { setToken, removeToken } from '../../helpers/storageHelper';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../../helpers/actionTypes';

// Login Action
export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.post('/login', { email, password });
      const data = response.data;
      if (data.status === 'success' && data.authorisation && data.authorisation.token) {
        setToken(data.authorisation.token);
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
          payload: 'Login failed. Please try again.',
        });
      }
    } catch (error) {
      let errorMessage = 'Network Error';
      if (error.response && error.response.data.message) {
        errorMessage = error.response.data.message;
      }
      dispatch({
        type: LOGIN_FAILURE,
        payload: errorMessage,
      });
    }
  };
};

// Logout Action
export const logoutUser = () => {
  return (dispatch) => {
    removeToken();
    dispatch({ type: LOGOUT });
  };
};


