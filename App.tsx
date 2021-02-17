import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import AppProvider from './src/hooks';
import Routes from './src/routes';
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
