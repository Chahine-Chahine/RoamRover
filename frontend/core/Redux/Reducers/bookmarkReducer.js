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
                return {...state, bookmarks: [...state.bookmarks, action.payload]}
            })
            .addCase(fetchBookmarks.fulfilled, (state, action) => {
                return {...state, bookmarks: action.payload}
            })
            .addCase(deleteBookmark.fulfilled, (state, action) => {
               const taha = state.bookmarks.filter(bookmark => bookmark.id !== action.payload);
               return {...state, bookmarks: taha}
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
