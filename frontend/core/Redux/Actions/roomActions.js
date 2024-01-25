import axios from "axios";
import {
  FETCH_CHATROOMS_REQUEST,
  FETCH_CHATROOMS_SUCCESS,
  FETCH_CHATROOMS_FAILURE,
  CREATE_CHATROOMS_REQUEST,
  CREATE_CHATROOMS_SUCCESS,
  CREATE_CHATROOMS_FAILURE,
  UPDATE_CHATROOM_REQUEST,
  UPDATE_CHATROOM_SUCCESS,
  UPDATE_CHATROOM_FAILURE,
} from "./actionTypes";

import { baseUrl } from "../../helpers/baseUrl";

export const fetchChatrooms = (token) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CHATROOMS_REQUEST });
    try {
      const response = await axios.get(`${baseUrl}/api/rooms`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: FETCH_CHATROOMS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: FETCH_CHATROOMS_FAILURE,
        payload: error.message || "An unknown error occurred",
      });
    }
  };
};

export const createChatroom = (roomDetails, token) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_CHATROOMS_REQUEST });
    try {
      const response = await axios.post(
        `${baseUrl}/api/rooms`,
        roomDetails,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: CREATE_CHATROOMS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: CREATE_CHATROOMS_FAILURE,
        payload: error.message || "An unknown error occurred",
      });
    }
  };
};

export const updateChatRoom = (roomId, participants, token) => {
  console.log(`console ${roomId} and ${participants}`);
  return async (dispatch) => {
    dispatch({ type: UPDATE_CHATROOM_REQUEST });
    try {
      const response = await axios.put(
        `${baseUrl}/api/updateRoom/${roomId}`,
        {participants},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: UPDATE_CHATROOM_SUCCESS, payload: response.data });
    } catch (error) {
      console.error('updateChatRoom error:', error);
      dispatch({ type: UPDATE_CHATROOM_FAILURE, payload: error.message || "An unknown error occurred" });
    }
  };
};
