import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './Reducers/authReducer';
import locationReducer from './Reducers/locationReducer';
import bookmarkReducer from './Reducers/bookmarkReducer'; 

export const store = configureStore({
  reducer: {
    auth: authReducer,
    locations: locationReducer,
    bookmark: bookmarkReducer, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
