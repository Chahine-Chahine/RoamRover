import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from './navigation/appNavigation';
import store from './core/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
