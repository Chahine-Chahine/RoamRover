const initialState = {
    Questionnaire: [],
    loading: false,
    error: null,
};

const generateaiReducer = (state = initialState, action) => {
    console.log('generateaiReducer received action:', action);
    switch (action.type) {
        case 'CREATE_QUESTIONNAIRE_REQUEST':
            return { ...state, loading: true };
        case 'CREATE_QUESTIONNAIRE_SUCCESS':
            return { ...state, loading: false, Questionnaire: action.payload };
        case 'CREATE_QUESTIONNAIRE_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default generateaiReducer;
