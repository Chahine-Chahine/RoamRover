import axios from 'axios';
import {
    FETCH_TRIPS_REQUEST,
    FETCH_TRIPS_SUCCESS,
    FETCH_TRIPS_FAILURE,
    CREATE_TRIP_REQUEST,
    CREATE_TRIP_SUCCESS,
    CREATE_TRIP_FAILURE,
    RESET_TRIP_CREATION_STATE,
    FETCH_TRIPS_BY_CATEGORY_REQUEST,
    FETCH_TRIPS_BY_CATEGORY_SUCCESS,
    FETCH_TRIPS_BY_CATEGORY_FAILURE,
} from './actionTypes';
import { baseUrl } from '../../helpers/baseUrl';

export const fetchTrips = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_TRIPS_REQUEST });
        try {
            const response = await axios.get(`${baseUrl}/api/trips`);
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
            const response = await axios.post(`${baseUrl}/api/trips`, tripData, {
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

export const resetTripCreationState = () => {
    return { type: RESET_TRIP_CREATION_STATE };
};

export const fetchTripsByCategory = (categoryId) => {
return async (dispatch) => {
    dispatch({ type: FETCH_TRIPS_BY_CATEGORY_REQUEST });
    try {
        const response = await axios.get(`${baseUrl}/api/trips/category/${categoryId}`);
        console.log('The response is:' ,response.data);
        dispatch({ type: FETCH_TRIPS_BY_CATEGORY_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_TRIPS_BY_CATEGORY_FAILURE, payload: error.message || 'An unknown error occurred'});
    }
};
};
