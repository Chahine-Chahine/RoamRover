export const fetchLocations = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'FETCH_LOCATIONS_REQUEST' });
            const response = await fetch('http://192.168.0.116/api/locations');
            const data = await response.json();
            dispatch({ type: 'FETCH_LOCATIONS_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_LOCATIONS_FAILURE', payload: error });
        }
    };
};
