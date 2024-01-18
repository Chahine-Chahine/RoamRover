import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import authReducer from './Reducers/authReducer';
import locationReducer from './Reducers/locationReducer';
import bookmarkReducer from './Reducers/bookmarkReducer'; 
import tripReducer from './Reducers/tripReducer';
import routeReducer from './Reducers/mapReducer';
import roomReducer from './Reducers/roomReducer';
import generateaiReducer from './Reducers/generateaiReducer';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    locations: locationReducer,
    bookmark: bookmarkReducer, 
    trips: tripReducer,
    route: routeReducer,
    chatroom: roomReducer,
    Questionnaire: generateaiReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
