import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import MainPage from './src/MainPage'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'

import store from './src/store'

import firebase from 'firebase/app'
require('firebase/storage')

const firebaseConfig = {
  apiKey: "AIzaSyBixkt0gTuQCmgK63U92vZx2ueoRJQy-nI",
  authDomain: "taes-imagenes.firebaseapp.com",
  projectId: "taes-imagenes",
  storageBucket: "taes-imagenes.appspot.com",
  messagingSenderId: "1039185206661",
  appId: "1:1039185206661:web:01abe5c8980add9c1978ec"
};

firebase.initializeApp(firebaseConfig)

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <MainPage firebase={firebase} />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
  
}
