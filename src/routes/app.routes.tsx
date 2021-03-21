import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Easing } from 'react-native-reanimated';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

// pages
import Home from '../pages/Home';
import Pokedex from '../pages/Pokedex';
import PokedexList from '../pages/Pokedex/PokedexList';
import PokemonDetails from '../pages/Pokedex/PokemonDetails';

const AppRoutes = () => {
  const Stack = createSharedElementStackNavigator();

  return (
    <Stack.Navigator headerMode={'none'} initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          header: () => {
            return <></>;
          },
        }}
      />
      <Stack.Screen name='Pokedex' component={Pokedex} />
      <Stack.Screen name='PokedexList' component={PokedexList} />
      <Stack.Screen
        name='PokemonDetails'
        component={PokemonDetails}
        options={() => {
          return {
            gestureEnabled: false,
            transitionSpec: {
              open: {
                animation: 'timing',
                config: { duration: 500, delay: 1 },
              },
              close: { animation: 'timing', config: { duration: 500 } },
            },
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
