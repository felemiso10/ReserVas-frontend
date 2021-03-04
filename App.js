import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import MainPage from './src/MainPage'

import store from './src/store'

export default function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}
