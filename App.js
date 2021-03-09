import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import MainPage from './src/MainPage'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import store from './src/store'

export default function App() {
  return (
    <SafeAreaProvider>
    <Provider store={store}>
      <MainPage />
    </Provider>
    </SafeAreaProvider>
  );
  
}
