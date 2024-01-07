const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
  error: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        token: null,
        error: action.payload,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isLoggedIn: true, 
        user: action.payload,
        token: null, 
        error: null,
      };
    case 'REGISTER_FAILURE':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        token: null,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...initialState,
      };
    case 'UPDATE_SUCCESS':
      return {
        ...state,
        user: action.payload, 
        error: null,
      };
    case 'UPDATE_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default authReducer;
