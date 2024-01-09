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
    extraReducers: (builder) => {
        builder
            .addCase(createBookmark.fulfilled, (state, action) => {
                state.bookmarks.push(action.payload);
            })
            .addCase(fetchBookmarks.fulfilled, (state, action) => {
                state.bookmarks = action.payload;
            })
            .addCase(deleteBookmark.fulfilled, (state, action) => {
                state.bookmarks = state.bookmarks.filter(bookmark => bookmark.id !== action.payload);
            })
            .addCase(createBookmark.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(fetchBookmarks.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(deleteBookmark.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

export default bookmarkSlice.reducer;
