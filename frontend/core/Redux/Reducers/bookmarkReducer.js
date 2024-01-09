// reducers/bookmarkReducer.js

import { ADD_BOOKMARK, SET_BOOKMARKS, REMOVE_BOOKMARK } from '../Actions/bookmarkActions';

const initialState = {
    bookmarks: [],
};

const bookmarkReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKMARK:
            return {
                ...state,
                bookmarks: [...state.bookmarks, action.payload],
            };
        case SET_BOOKMARKS:
            return {
                ...state,
                bookmarks: action.payload,
            };
        case REMOVE_BOOKMARK:
            return {
                ...state,
                bookmarks: state.bookmarks.filter(bookmark => bookmark.id !== action.payload),
            };
        default:
            return state;
    }
};

export default bookmarkReducer;
