const initialState = {
    trips: [],
    loading: false,
    error: null,
};

const tripReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TRIPS_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_TRIPS_SUCCESS':
            return { ...state, loading: false, locations: action.payload };
        case 'FETCH_TRIPS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default tripReducer;
