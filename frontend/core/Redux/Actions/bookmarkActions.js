
import axios from 'axios'; 
import {
    ADD_BOOKMARK,
    SET_BOOKMARKS,
    REMOVE_BOOKMARK
} from './actionTypes';

const baseUrl = 'http://192.168.43.29';

const API_ENDPOINT = `${baseUrl}`;

// Add Bookmark
export const addBookmark = (bookmark) => ({
    type: ADD_BOOKMARK,
    payload: bookmark,
});

// Set All Bookmarks
export const setBookmarks = (bookmarks) => ({
    type: SET_BOOKMARKS,
    payload: bookmarks,
});

// Remove Bookmark
export const removeBookmark = (bookmarkId) => ({
    type: REMOVE_BOOKMARK,
    payload: bookmarkId,
});

// Create a new bookmark
export const createBookmark = (userId, locationId) => async (dispatch) => {
    try {
        const response = await axios.post(`${API_ENDPOINT}/bookmarks/create`, { user_id: userId, location_id: locationId });
        dispatch(addBookmark(response.data.bookmark));
    } catch (error) {
        console.error('Error creating bookmark', error);
    }
};
