import axios from 'axios';
import {
    FETCH_TRIPS_REQUEST,
    FETCH_TRIPS_SUCCESS,
    FETCH_TRIPS_FAILURE,
    CREATE_TRIP_REQUEST,
    CREATE_TRIP_SUCCESS,
    CREATE_TRIP_FAILURE,
} from './actionTypes';

const baseUrl = 'http://192.168.240.32:8000/api';

export const fetchTrips = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_TRIPS_REQUEST });
        try {
            const response = await axios.get(`${baseUrl}/trips`);
            dispatch({ type: FETCH_TRIPS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: FETCH_TRIPS_FAILURE, payload: error.message || 'An unknown error occurred'});
        }
    };
};

export const createTrip = (tripData, token) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_TRIP_REQUEST });
        try {
            const response = await axios.post(`${baseUrl}/trips`, tripData, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            });
            dispatch({ type: CREATE_TRIP_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: CREATE_TRIP_FAILURE, payload: error.message || 'An unknown error occurred' });
        }
    };
};
