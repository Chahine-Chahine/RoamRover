import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './Reducers/authReducer';
import locationReducer from './Reducers/locationReducer';
import bookmarkReducer from './Reducers/bookmarkReducer'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Subscribe to store updates to save the state to AsyncStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
