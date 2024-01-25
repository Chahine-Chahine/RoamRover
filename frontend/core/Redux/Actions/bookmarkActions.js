import axios from 'axios';
import { baseUrl } from '../../helpers/baseUrl';
import {
    FETCH_BOOKMARKS_REQUEST , 
    FETCH_BOOKMARKS_SUCCESS ,
    FETCH_BOOKMARKS_FAILURE, 
    CREATE_BOOKMARK_REQUEST, 
    CREATE_BOOKMARK_SUCCESS, 
    CREATE_BOOKMARK_FAILURE,
    DELETE_BOOKMARK_REQUEST, 
    DELETE_BOOKMARK_SUCCESS, 
    DELETE_BOOKMARK_FAILURE} from './actionTypes'


export const fetchBookmarks = (token) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_BOOKMARKS_REQUEST });
        try {
            const response = await axios.get(`${baseUrl}/api/displayUserBookmarks` , { 
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },});
            dispatch({ type: FETCH_BOOKMARKS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: FETCH_BOOKMARKS_FAILURE, payload: error.message || 'An unknown error occurred'});
        }
    };
}

export const createBookmark = ({ userId, locationId , token }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_BOOKMARK_REQUEST });
        try {
            const response = await axios.post(`${baseUrl}/api/bookmarks`,
                { user_id: userId, location_id: locationId },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            dispatch({ type: CREATE_BOOKMARK_SUCCESS, payload: response.data });
            dispatch(fetchBookmarks(token));
        } catch (error) {
            dispatch({ type: CREATE_BOOKMARK_FAILURE, payload: error.message || 'An unknown error occurred' });
        }
    };
}

// Refactored deleteBookmark
export const deleteBookmark = (bookmarkId, token) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_BOOKMARK_REQUEST });
        try {
            const response = await axios.delete(`${baseUrl}/api/bookmarks/${bookmarkId}`);
            dispatch({ type: DELETE_BOOKMARK_SUCCESS, payload: response.data });
            dispatch(fetchBookmarks(token));
        } catch (error) {
            dispatch({ type: DELETE_BOOKMARK_FAILURE, payload: error.message || 'An unknown error occurred' });
        }
    };
}

