const initialState = {
    trips: [],
    loading: false,
    error: null,
};

function tripReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_TRIPS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_TRIPS_SUCCESS':
        return { ...state, loading: false, trips: action.payload.trips }; 
      case 'FETCH_TRIPS_FAILURE':
        return { ...state, loading: false, error: action.payload.error };
        case 'CREATE_TRIP_REQUEST':
          return {...state, loading: true};
      case 'CREATE_TRIP_SUCCESS':
          return {...state, loading: false, trips: [...state.trips, action.payload]};
      case 'CREATE_TRIP_FAILURE':
          return {...state, loading: false, error: action.payload};
      default:
        return state;
    }
  }
  

export default tripReducer;
