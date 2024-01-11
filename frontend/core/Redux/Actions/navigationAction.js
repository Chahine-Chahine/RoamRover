export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';


export const setActiveTab = (tabName) => ({
  type: SET_ACTIVE_TAB,
  payload: tabName,
});
