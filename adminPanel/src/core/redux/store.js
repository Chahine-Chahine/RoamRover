import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import announcementReducer from './reducers/announcementReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    announcement: announcementReducer,
  },
});

export default store;
