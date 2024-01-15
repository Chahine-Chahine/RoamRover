const initialState = {
    isLoading: false,
    data: null,
    error: null,
  };
  
  const routeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_ROUTE_LOADING':
        return { ...state, isLoading: true, error: null };
      case 'FETCH_ROUTE_SUCCESS':
        return { ...state, isLoading: false, data: action.payload };
      case 'FETCH_ROUTE_ERROR':
        return { ...state, isLoading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default routeReducer;
  