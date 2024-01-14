const initialState = {
  trips: [],
  loading: false,
  error: null,
};

function tripReducer(state = initialState, action) {
  switch (action.type) {
      case 'FETCH_TRIPS_REQUEST':
          return { ...state, loading: true, error: null };
      case 'FETCH_TRIPS_SUCCESS':
          return { ...state, loading: false, trips: action.payload.trips, error: null }; 
      case 'FETCH_TRIPS_FAILURE':
          return { ...state, loading: false, error: action.payload.error };

      case 'CREATE_TRIP_REQUEST':
          return { ...state, loading: true, error: null };
          case 'CREATE_TRIP_SUCCESS':
            // Ensure that action.payload contains the trip object
            return {
                ...state,
                loading: false,
                trips: [...state.trips, action.payload.trip],
                error: null
            };

        case 'CREATE_TRIP_FAILURE':
            // Handle both object and string error payloads
            const error = typeof action.payload === 'string' ? action.payload : action.payload.error;
            return {
                ...state,
                loading: false,
                error: error
            };

      default:
          return state;
  }
}

export default tripReducer;
