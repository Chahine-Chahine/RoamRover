import axios from "axios";
import {
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAILURE,
  CREATE_LOCATION_SUCCESS,
  CREATE_LOCATIONS_FAILURE,
  UPDATE_LOCATION_SUCCESS,
  UPDATE_LOCATIONS_FAILURE,
  DELETE_LOCATION_SUCCESS,
  DELETE_LOCATIONS_FAILURE,
} from "./actionTypes";

export const fetchLocations = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/locations");
    dispatch({ type: FETCH_LOCATIONS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: FETCH_LOCATIONS_FAILURE,
      payload: error.message || "An unknown error occurred",
    });
  }
};

export const createLocation = (locationData) => async (dispatch) => {
  try {
    const response = await axios.post("/api/locations", locationData);
    dispatch({ type: CREATE_LOCATION_SUCCESS, payload: response.data });
    dispatch(fetchLocations());
  } catch (error) {
    dispatch({
      type: CREATE_LOCATIONS_FAILURE,
      payload: error.message || "An unknown error occurred",
    });
  }
};

export const updateLocation = (id, locationData) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/locations/${id}`, locationData);
    dispatch({ type: UPDATE_LOCATION_SUCCESS, payload: response.data });
    dispatch(fetchLocations());
  } catch (error) {
    dispatch({
      type: UPDATE_LOCATIONS_FAILURE,
      payload: error.message || "An unknown error occurred",
    });
  }
};

export const deleteLocation = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/locations/${id}`);
    dispatch({ type: DELETE_LOCATION_SUCCESS, payload: id });
    dispatch(fetchLocations());
  } catch (error) {
    dispatch({
      type: DELETE_LOCATIONS_FAILURE,
      payload: error.message || "An unknown error occurred",
    });
  }
};
