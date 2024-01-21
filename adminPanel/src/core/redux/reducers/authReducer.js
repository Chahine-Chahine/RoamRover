import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../../helpers/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  errorMessage: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.authorisation.token,
        errorMessage: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        errorMessage: action.payload,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default authReducer;
