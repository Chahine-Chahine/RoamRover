import {
    FETCH_LOCATIONS_SUCCESS,
    FETCH_LOCATIONS_FAILURE,
    CREATE_LOCATION_SUCCESS,
    CREATE_LOCATION_FAILURE,
    UPDATE_LOCATION_SUCCESS,
    UPDATE_LOCATION_FAILURE,
    DELETE_LOCATION_SUCCESS,
    DELETE_LOCATION_FAILURE,
} from "./actionTypes";

const initialState = {
  locations: [],
  error: null,
};

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOCATIONS_SUCCESS:
      return { ...state, locations: action.payload, error: null };
    case FETCH_LOCATIONS_FAILURE:
      return { ...state, error: action.payload };
    case CREATE_LOCATION_SUCCESS:
      return { ...state, locations: [...state.locations, action.payload], error: null };
    case CREATE_LOCATION_FAILURE:
      return { ...state, error: action.payload };
    case UPDATE_LOCATION_SUCCESS:
      return { ...state, locations: state.locations.map(loc => loc.id === action.payload.id ? action.payload : loc), error: null };
    case UPDATE_LOCATION_FAILURE:
      return { ...state, error: action.payload };
    case DELETE_LOCATION_SUCCESS:
      return { ...state, locations: state.locations.filter(loc => loc.id !== action.payload), error: null };
    case DELETE_LOCATION_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
