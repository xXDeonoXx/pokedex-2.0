import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import AppProvider from './src/hooks';
import { enableScreens } from 'react-native-screens';
enableScreens();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
