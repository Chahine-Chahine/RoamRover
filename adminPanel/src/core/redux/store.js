import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import announcementReducer from './reducers/announcementReducer';
import locationReducer from './reducers/locationReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    announcement: announcementReducer,
    location: locationReducer,
  },
});

export default store;
