import {
    FETCH_CHATROOMS_REQUEST,
    FETCH_CHATROOMS_SUCCESS,
    FETCH_CHATROOMS_FAILURE,
    CREATE_CHATROOMS_REQUEST,
    CREATE_CHATROOMS_SUCCESS,
    CREATE_CHATROOMS_FAILURE,
    UPDATE_CHATROOM_REQUEST,
    UPDATE_CHATROOM_SUCCESS,
    UPDATE_CHATROOM_FAILURE
} from '../Actions/actionTypes';

const initialState = {
    chatrooms: [],
    loading: false,
    error: null
};

const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHATROOMS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_CHATROOMS_SUCCESS:
            return {
                ...state,
                loading: false,
                chatrooms: action.payload,
                error: null
            };
        case FETCH_CHATROOMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case CREATE_CHATROOMS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case CREATE_CHATROOMS_SUCCESS:
            return {
                ...state,
                loading: false,
                chatrooms: [...state.chatrooms, action.payload],
                error: null
            };
        case CREATE_CHATROOMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
            case UPDATE_CHATROOM_REQUEST:
                return {
                  ...state,
                  updating: true,
                };
              case UPDATE_CHATROOM_SUCCESS:
                return {
                  ...state,
                  updating: false,
                  rooms: Array.isArray(state.rooms) ? state.rooms.map(room =>
                    room.id === action.payload.id ? action.payload : room
                  ) : [action.payload],
                };
              case UPDATE_CHATROOM_FAILURE:
                return {
                  ...state,
                  updating: false,
                  error: action.payload,
                };
        default:
            return state;
    }
};

export default roomReducer;
