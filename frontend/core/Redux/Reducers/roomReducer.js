import {
    FETCH_CHATROOMS_REQUEST,
    FETCH_CHATROOMS_SUCCESS,
    FETCH_CHATROOMS_FAILURE,
    CREATE_CHATROOMS_REQUEST,
    CREATE_CHATROOMS_SUCCESS,
    CREATE_CHATROOMS_FAILURE,
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
        default:
            return state;
    }
};

export default roomReducer;
