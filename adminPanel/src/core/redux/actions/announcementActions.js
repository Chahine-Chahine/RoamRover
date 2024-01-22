import axios from 'axios';
import { baseUrl } from '../../helpers/baseUrl';
import {
    FETCH_ANNOUNCEMENTS_REQUEST,
    FETCH_ANNOUNCEMENTS_SUCCESS,
    FETCH_ANNOUNCEMENTS_FAILURE,
    CREATE_ANNOUNCEMENT_REQUEST,
    CREATE_ANNOUNCEMENT_SUCCESS,
    CREATE_ANNOUNCEMENT_FAILURE,
    UPDATE_ANNOUNCEMENT_REQUEST,
    UPDATE_ANNOUNCEMENT_SUCCESS,
    UPDATE_ANNOUNCEMENT_FAILURE,
    DELETE_ANNOUNCEMENT_REQUEST,
    DELETE_ANNOUNCEMENT_SUCCESS,
    DELETE_ANNOUNCEMENT_FAILURE
} from '../../helpers/actionTypes';



// Fetch Announcements
export const fetchAnnouncements = (token) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_ANNOUNCEMENTS_REQUEST });
        try {
            const response = await axios.get(`${baseUrl}/announcements`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log(response.data.announcements)
            dispatch({ type: FETCH_ANNOUNCEMENTS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: FETCH_ANNOUNCEMENTS_FAILURE, payload: error.message });
        }
    };
};

// Create Announcement
export const createAnnouncement = (announcementData, token) => {
    return async (dispatch) => {
        console.log('Announcement data being sent:', announcementData , token);
        dispatch({ type: CREATE_ANNOUNCEMENT_REQUEST });
        try {
            const response = await axios.post(`${baseUrl}/announcements`, announcementData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            dispatch({ type: CREATE_ANNOUNCEMENT_SUCCESS, payload: response.data });
            dispatch(fetchAnnouncements(token)); 
        } catch (error) {
            dispatch({ type: CREATE_ANNOUNCEMENT_FAILURE, payload: error.message });
        }
    };
};

// Update Announcement
export const updateAnnouncement = (id, announcementData, token) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_ANNOUNCEMENT_REQUEST });
        try {
            const response = await axios.put(`${baseUrl}/announcements/${id}`, announcementData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            dispatch({ type: UPDATE_ANNOUNCEMENT_SUCCESS, payload: response.data });
            dispatch(fetchAnnouncements(token)); 
        } catch (error) {
            dispatch({ type: UPDATE_ANNOUNCEMENT_FAILURE, payload: error.message });
        }
    };
};

// Delete Announcement
export const deleteAnnouncement = (id, token) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_ANNOUNCEMENT_REQUEST });
        try {
            await axios.delete(`${baseUrl}/announcements/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            dispatch({ type: DELETE_ANNOUNCEMENT_SUCCESS, payload: id });
            dispatch(fetchAnnouncements(token)); 
        } catch (error) {
            dispatch({ type: DELETE_ANNOUNCEMENT_FAILURE, payload: error.message });
        }
    };
};
