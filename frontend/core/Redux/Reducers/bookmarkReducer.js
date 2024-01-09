import { createSlice } from '@reduxjs/toolkit';
import { createBookmark, fetchBookmarks, deleteBookmark } from '../Actions/bookmarkActions';

const initialState = {
    bookmarks: [],
    loading: false,
    error: null,
};

const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers: {},
    extraReducers: {
        [createBookmark.fulfilled]: (state, action) => {
            state.bookmarks.push(action.payload);
        },
        [fetchBookmarks.fulfilled]: (state, action) => {
            state.bookmarks = action.payload;
        },
        [deleteBookmark.fulfilled]: (state, action) => {
            state.bookmarks = state.bookmarks.filter(bookmark => bookmark.id !== action.payload);
        },
        [createBookmark.rejected]: (state, action) => {
            state.error = action.error.message;
        },
        [fetchBookmarks.rejected]: (state, action) => {
            state.error = action.error.message;
        },
        [deleteBookmark.rejected]: (state, action) => {
            state.error = action.error.message;
        },
    },
});

export default bookmarkSlice.reducer;
