import SET_ACTIVE_TAB from './actionTypes';

export const setActiveTab = (tabName) => ({
  type: SET_ACTIVE_TAB,
  payload: tabName,
});
