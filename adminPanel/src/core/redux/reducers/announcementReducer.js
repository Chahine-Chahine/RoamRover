import {
  FETCH_ANNOUNCEMENTS_REQUEST,
  FETCH_ANNOUNCEMENTS_SUCCESS,
  FETCH_ANNOUNCEMENTS_FAILURE,
  CREATE_ANNOUNCEMENT_REQUEST,
  CREATE_ANNOUNCEMENT_SUCCESS,
  CREATE_ANNOUNCEMENT_FAILURE,
  UPDATE_ANNOUNCEMENT_REQUEST,
  UPDATE_ANNOUNCEMENT_SUCCESS,
  UPDATE_ANNOUNCEMENT_FAILURE,
  DELETE_ANNOUNCEMENT_REQUEST,
  DELETE_ANNOUNCEMENT_SUCCESS,
  DELETE_ANNOUNCEMENT_FAILURE,
} from "../../helpers/actionTypes";

const initialState = {
    announcements: [], 
    loading: false,
    error: null
};
const announcementReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANNOUNCEMENTS_REQUEST:
    case CREATE_ANNOUNCEMENT_REQUEST:
    case UPDATE_ANNOUNCEMENT_REQUEST:
    case DELETE_ANNOUNCEMENT_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_ANNOUNCEMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        announcements: action.payload.announcements,
        error: null,
      };

    case CREATE_ANNOUNCEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        announcements: [...state.announcements, action.payload],
        error: null,
      };

    case UPDATE_ANNOUNCEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        announcements: state.announcements.map((announcement) =>
          announcement.id === action.payload.id ? action.payload : announcement
        ),
        error: null,
      };

    case DELETE_ANNOUNCEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        announcements: state.announcements.filter(
          (announcement) => announcement.id !== action.payload
        ),
        error: null,
      };

    case FETCH_ANNOUNCEMENTS_FAILURE:
    case CREATE_ANNOUNCEMENT_FAILURE:
    case UPDATE_ANNOUNCEMENT_FAILURE:
    case DELETE_ANNOUNCEMENT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default announcementReducer;
