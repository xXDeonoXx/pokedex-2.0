import React from 'react';

import { PokedexProvider } from './pokedex';

const AppProvider: React.FC = ({ children }) => (
  <PokedexProvider>{children}</PokedexProvider>
);

export default AppProvider;
