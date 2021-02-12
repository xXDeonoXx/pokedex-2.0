import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// pages
import Home from '../pages/Home';

const AppRoutes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => {
            return <></>;
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
