import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigation from './navigation/appNavigation';
import { store } from './core/Redux/store';
import LoadingScreen from './screens/LoadingScreen'; 

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadPersistedState = async () => {
      const serializedState = await AsyncStorage.getItem('state');
      if (serializedState) {
        store.dispatch({
          type: 'REHYDRATE_STATE',
          payload: JSON.parse(serializedState),
        });
      }
      setIsReady(true);
    };

    loadPersistedState();
  }, []);

  if (!isReady) {
    return <LoadingScreen />;
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
