import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../helpers/baseUrl';


export const fetchBookmarks = createAsyncThunk(
    'bookmark/fetchBookmarks',
    async (_, { getState }) => {
        const state = getState();
        const token = state.auth.token; 

        const response = await axios.get(`${baseUrl}:8000/api/displayUserBookmarks`, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        });
        return response.data;
    }
    );
// Async Thunk Actions
export const createBookmark = createAsyncThunk(
    'bookmark/createBookmark',
    async ({ userId, locationId }, { getState }) => {
        const token = getState().auth.token;
        const response = await axios.post(`${baseUrl}:8000/api/bookmarks`, 
            { user_id: userId, location_id: locationId },
            {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            }
        );
        return response.data;
    }
);

export const deleteBookmark = createAsyncThunk(
    'bookmark/deleteBookmark',
    async (bookmarkId) => {
        const response = await axios.delete(`${baseUrl}:8000/api/bookmarks/${bookmarkId}`);
        return response.data; 
    }
);