import axios from "axios";
import { baseUrl } from "../../helpers/baseUrl";
import {
  CREATE_QUESTIONNAIRE_REQUEST,
  CREATE_QUESTIONNAIRE_SUCCESS,
  CREATE_QUESTIONNAIRE_FAILURE,
  FETCH_AIRESPONSE_REQUEST,
  FETCH_AIRESPONSE_SUCCESS,
  FETCH_AIRESPONSE_FAILURE,
} from "./actionTypes";

export const createQuestionnaire = ({ QuestionnaireData, token }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_QUESTIONNAIRE_REQUEST });
    try {
      const response = await axios.post(
        `${baseUrl}/api/postQuestionnaire`,
        QuestionnaireData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: CREATE_QUESTIONNAIRE_SUCCESS, payload: response.data });
      return response.data; 
    } catch (error) {
      dispatch({ type: CREATE_QUESTIONNAIRE_FAILURE, payload: error.message });
      return Promise.reject(error); 
    }
  };
};

export const fetchAIResponse = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_AIRESPONSE_REQUEST });
    try {
      const response = await axios.get(`${baseUrl}/api/generateTripAi`);
      dispatch({ type: FETCH_AIRESPONSE_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_AIRESPONSE_FAILURE, payload: error.message });
      }
  };
};
