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
            const response = await axios.post(`${baseUrl}:8000/api/postQuestionnaire`,  QuestionnaireData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch({ type: CREATE_QUESTIONNAIRE_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: CREATE_QUESTIONNAIRE_FAILURE, payload: error });
        }
    };
};
