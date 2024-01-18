import {
    FETCH_BOOKMARKS_REQUEST,
    FETCH_BOOKMARKS_SUCCESS,
    FETCH_BOOKMARKS_FAILURE,
    CREATE_BOOKMARKS_REQUEST,
    CREATE_BOOKMARKS_SUCCESS,
    CREATE_BOOKMARKS_FAILURE,
} from '../Actions/actionTypes';

const initialState = {
    bookmarks: [],
    loading: false,
    error: null
};

const bookmarkReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKMARKS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_BOOKMARKS_SUCCESS:
            return {
                ...state,
                loading: false,
                chatrooms: action.payload,
                error: null
            };
        case FETCH_BOOKMARKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case CREATE_BOOKMARKS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case CREATE_BOOKMARKS_SUCCESS:
            return {
                ...state,
                loading: false,
                chatrooms: [...state.chatrooms, action.payload],
                error: null
            };
        case CREATE_BOOKMARKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default bookmarkReducer;
