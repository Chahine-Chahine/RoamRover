import axios from 'axios';
import {
    FETCH_CHATROOMS_REQUEST,
    FETCH_CHATROOMS_SUCCESS,
    FETCH_CHATROOMS_FAILURE,
    CREATE_CHATROOMS_REQUEST,
    CREATE_CHATROOMS_SUCCESS,
    CREATE_CHATROOMS_FAILURE,
} from './actionTypes';

import { baseUrl } from '../../helpers/baseUrl';

export const fetchChatrooms = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_CHATROOMS_REQUEST });
        try {
            const response = await axios.get(`${baseUrl}:8000/api/rooms`); 
            dispatch({ type: FETCH_CHATROOMS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: FETCH_CHATROOMS_FAILURE, payload: error.message || 'An unknown error occurred' });
        }
    };
};

export const createChatroom = (roomData, token) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_CHATROOMS_REQUEST });
        try {
            const response = await axios.post(`${baseUrl}:8000/api/rooms`, roomData, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            });
            dispatch({ type: CREATE_CHATROOMS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: CREATE_CHATROOMS_FAILURE, payload: error.message || 'An unknown error occurred' });
        }
    };
};
