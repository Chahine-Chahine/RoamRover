const initialState = {
    locations: [],
    loading: false,
    error: null,
};

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_LOCATIONS_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_LOCATIONS_SUCCESS':
            return { ...state, loading: false, locations: action.payload };
        case 'FETCH_LOCATIONS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default locationReducer;
