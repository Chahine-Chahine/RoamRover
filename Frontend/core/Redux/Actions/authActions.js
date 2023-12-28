import { LOGIN_SUCCESS, LOGOUT } from './actionTypes';

export const loginSuccess = (userData) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userData,
  };
};

// Action Creator for logging in
export const loginUser = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (data.status === 'success') {
        dispatch(loginSuccess(data.authorisation));
      } else {
        // Handle failure
      }
    } catch (error) {
      console.error(error);
    }
  };
};


