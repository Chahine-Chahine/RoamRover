import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://192.168.43.29:8000';

// Async Thunk Actions
export const createBookmark = createAsyncThunk(
    'bookmark/createBookmark',
    async ({ userId, locationId }) => {
        const response = await axios.post(`${baseUrl}/api/bookmarks/create`, { user_id: userId, location_id: locationId });
        return response.data.bookmark;
    }
);

export const fetchBookmarks = createAsyncThunk(
    'bookmark/fetchBookmarks',
    async (_, { getState }) => {
        const state = getState();
        const token = state.auth.token; 

        const response = await axios.get(`${baseUrl}/api/bookmarks/user`, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        });
        return response.data;
    }
);

export const deleteBookmark = createAsyncThunk(
    'bookmark/deleteBookmark',
    async (bookmarkId) => {
        await axios.delete(`${baseUrl}/api/bookmarks/${bookmarkId}`);
        return bookmarkId;
    }
);
