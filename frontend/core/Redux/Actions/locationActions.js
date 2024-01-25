import {
    FETCH_LOCATIONS_REQUEST,
    FETCH_LOCATIONS_SUCCESS,
    FETCH_LOCATIONS_FAILURE
} from './actionTypes';
import { baseUrl } from '../../helpers/baseUrl';

export const fetchLocations = (searchQuery = '') => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_LOCATIONS_REQUEST });

            const endpoint = searchQuery ? 
                `${baseUrl}/api/search?query=${encodeURIComponent(searchQuery)}` : 
                `${baseUrl}/api/locations`;

            const response = await fetch(endpoint);
            const data = await response.json();

            dispatch({ type: FETCH_LOCATIONS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: FETCH_LOCATIONS_FAILURE, payload: error.message || 'An unknown error occurred' });
        }
    };
};