import {
    FETCH_LOCATIONS_REQUEST,
    FETCH_LOCATIONS_SUCCESS,
    FETCH_LOCATIONS_FAILURE
} from './actionTypes';
import { baseUrl } from '../../helpers/baseUrl';

export const fetchLocations = (searchQuery = '', category = '') => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_LOCATIONS_REQUEST });

            let endpoint = `${baseUrl}:8000/api/locations`;
            if (searchQuery) {
                endpoint += `?query=${encodeURIComponent(searchQuery)}`;
            }
            if (category) {
                endpoint += searchQuery ? `&category=${encodeURIComponent(category)}` : `?category=${encodeURIComponent(category)}`;
            }

            const response = await fetch(endpoint);
            const data = await response.json();

            dispatch({ type: FETCH_LOCATIONS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: FETCH_LOCATIONS_FAILURE, payload: error.message || 'An unknown error occurred' });
        }
    };
};
