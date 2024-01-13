import {
    FETCH_LOCATIONS_REQUEST,
    FETCH_LOCATIONS_SUCCESS,
    FETCH_LOCATIONS_FAILURE
} from './actionTypes';

const baseUrl = 'http://192.168.240.32';

export const fetchLocations = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_LOCATIONS_REQUEST });
            const response = await fetch(`${baseUrl}:8000/api/locations`);
            const data = await response.json();
            dispatch({ type: FETCH_LOCATIONS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: FETCH_LOCATIONS_FAILURE, payload: error.message || 'An unknown error occurred'});
            
        }
    };
};
