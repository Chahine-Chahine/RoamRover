import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://192.168.0.116:8000';


export const fetchBookmarks = createAsyncThunk(
    'bookmark/fetchBookmarks',
    async (_, { getState }) => {
        const state = getState();
        const token = state.auth.token; 

        const response = await axios.get(`${baseUrl}/api/displayUserBookmarks`, {
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
        const response = await axios.post(`${baseUrl}/api/bookmarks`, 
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
        const response = await axios.delete(`${baseUrl}/api/bookmarks/${bookmarkId}`);
        return response.data; // Assuming this returns the deleted bookmark's ID
    }
);