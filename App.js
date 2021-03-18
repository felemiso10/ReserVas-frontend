import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import MainPage from './src/MainPage'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'

import store from './src/store'

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <MainPage />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
  
}
