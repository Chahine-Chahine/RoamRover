import {
  CREATE_TRIP_FAILURE,
  CREATE_TRIP_REQUEST,
  CREATE_TRIP_SUCCESS,
  FETCH_TRIPS_FAILURE,
  FETCH_TRIPS_REQUEST,
  FETCH_TRIPS_SUCCESS,
  RESET_TRIP_CREATION_STATE,
  FETCH_TRIPS_BY_CATEGORY_REQUEST,
  FETCH_TRIPS_BY_CATEGORY_SUCCESS,
  FETCH_TRIPS_BY_CATEGORY_FAILURE,
} from "../Actions/actionTypes";

const initialState = {
  trips: [],
  loading: false,
  error: null,
  success: false,
};

function tripReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRIPS_REQUEST:
      return { ...state, loading: true };
    case FETCH_TRIPS_SUCCESS:
      return { ...state, loading: false, trips: action.payload.trips };
    case FETCH_TRIPS_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case CREATE_TRIP_REQUEST:
      return { ...state, loading: true };
    case CREATE_TRIP_SUCCESS:
      const newTrips = action.payload.trips || [];
      return { ...state, loading: false, success: true, trips: newTrips };
    case CREATE_TRIP_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case RESET_TRIP_CREATION_STATE:
      return {
        ...state,
        success: false,
        error: null,
      };
    case FETCH_TRIPS_BY_CATEGORY_REQUEST:
      return { ...state, loading: true };
    case FETCH_TRIPS_BY_CATEGORY_SUCCESS:
      return { ...state, loading: false, trips: action.payload };
    case FETCH_TRIPS_BY_CATEGORY_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default tripReducer;
