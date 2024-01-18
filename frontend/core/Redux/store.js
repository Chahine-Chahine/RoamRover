import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './Reducers/authReducer';
import locationReducer from './Reducers/locationReducer';
import bookmarkReducer from './Reducers/bookmarkReducer'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import tripReducer from './Reducers/tripReducer';
import routeReducer from './Reducers/mapReducer';
import roomReducer from './Reducers/roomReducer';

const saveState = async (state) => {
  try {
    const serializedState = JSON.stringify(state);
    await AsyncStorage.setItem('state', serializedState);
  } catch (err) {
    console.error('Error during state save:', err);
  }
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    locations: locationReducer,
    bookmark: bookmarkReducer, 
    trips: tripReducer,
    route: routeReducer,
    rooms: roomReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
