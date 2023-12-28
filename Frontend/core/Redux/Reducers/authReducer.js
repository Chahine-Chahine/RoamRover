const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
      case 'LOGIN_SUCCESS':
          return {
              ...state,
              isLoggedIn: true,
              user: action.payload.user,
              token: action.payload.token,
          };
      case 'LOGIN_FAILURE':
          return {
              ...state,
              isLoggedIn: false,
              user: null,
              token: null,
              error: action.payload,
          };
      default:
          return state;
  }
}

export default authReducer;
