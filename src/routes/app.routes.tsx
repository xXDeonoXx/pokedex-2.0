import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

// pages
import Home from '../pages/Home';
import Pokedex from '../pages/Pokedex';
import PokedexList from '../pages/Pokedex/PokedexList';
import PokemonDetails from '../pages/Pokedex/PokemonDetails';

const AppRoutes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => {
            return <></>;
          },
        }}
      />
      <Stack.Screen name="Pokedex" component={Pokedex} />
      <Stack.Screen name="PokedexList" component={PokedexList} />
      <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
