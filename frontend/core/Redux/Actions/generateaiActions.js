import axios from 'axios';
import { baseUrl } from '../../helpers/baseUrl';
import {
    CREATE_QUESTIONNAIRE_REQUEST,
    CREATE_QUESTIONNAIRE_SUCCESS,
    CREATE_QUESTIONNAIRE_FAILURE
} from './actionTypes';

export const createQuestionnaire = ({QuestionnaireData, token }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_QUESTIONNAIRE_REQUEST });
        try {
            console.log('Dispatching createQuestionnaire with data:', QuestionnaireData, 'and token:', token);
            const response = await axios.post(`${baseUrl}:8000/api/postQuestionnaire`,  QuestionnaireData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('createQuestionnaire response:', response);
            dispatch({ type: CREATE_QUESTIONNAIRE_SUCCESS, payload: response.data });
        } catch (error) {
            console.log('createQuestionnaire error:', error);
            dispatch({ type: CREATE_QUESTIONNAIRE_FAILURE, payload: error });
        }
    };
};
