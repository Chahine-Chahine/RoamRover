import {
    FETCH_TRIPS_REQUEST,
    FETCH_TRIPS_SUCCESS,
    FETCH_TRIPS_FAILURE,
    CREATE_TRIP_REQUEST,
    CREATE_TRIP_SUCCESS,
    CREATE_TRIP_FAILURE,
} from './actionTypes';

const baseUrl = 'http://192.168.0.116';

export const fetchTrips = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_TRIPS_REQUEST });
            const response = await fetch(`${baseUrl}:8000/api/trips`);
            const data = await response.json();
            dispatch({ type: FETCH_TRIPS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: FETCH_TRIPS_FAILURE, payload: error.message || 'An unknown error occurred'});
            
        }
    };
};

// createTrip action creator
export const createTrip = (tripData) => {
    return async (dispatch) => {
        try {
            dispatch({ type: CREATE_TRIP_REQUEST });
            const response = await fetch(`${baseUrl}:8000/api/trips`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tripData),
            });
            const data = await response.json();
            dispatch({ type: CREATE_TRIP_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: CREATE_TRIP_FAILURE, payload: error.message || 'An unknown error occurred' });
        }
    };
};