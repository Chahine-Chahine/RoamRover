// reducer.js
import { SET_ACTIVE_TAB } from '../Actions/actionTypes';

const initialState = {
  activeTab: 'Explore', 
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
};

export default navigationReducer;
