import AsyncStorage from '@react-native-community/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import Pokemon from '../@Types/Pokemon';
import getPokedexEntries from '../utils/getPokedexEntries';

interface PokedexState {
  name: string;
  pokemons: Pokemon[];
}

interface PokedexContextData {
  updateCache(pokedexId: number): Promise<Pokemon[] | undefined>;
  setPokedex(pokedexId: number): Promise<void>;
  pokemons: Pokemon[];
}

const PokedexContext = createContext<PokedexContextData>(
  {} as PokedexContextData
);

const PokedexProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<PokedexState>({
    name: '',
    pokemons: [],
  } as PokedexState);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {}
    loadStoragedData();
  }, []);

  const updateCache = useCallback(async (pokedexId: number) => {
    const pks: Pokemon[] | undefined = await getPokedexEntries(pokedexId);
    AsyncStorage.setItem(`POKEDEX_${pokedexId}`, JSON.stringify(pks));
    return pks;
  }, []);

  const setPokedex = useCallback(async (pokedexId: number) => {
    const storagePks = await AsyncStorage.getItem(`POKEDEX_${pokedexId}`);
    if (!storagePks) {
      const pks = await updateCache(pokedexId);
      console.log(pks);
      if (pks) {
        setData({ name: '', pokemons: pks });
      }
    }
    if (storagePks != null) {
      setData({ name: '', pokemons: JSON.parse(storagePks) });
    }
  }, []);

  return (
    <PokedexContext.Provider
      value={{
        ...data,
        updateCache,
        setPokedex,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

function usePokedex(): PokedexContextData {
  const context = useContext(PokedexContext);

  if (!context) {
    throw new Error('usePokedex must be used within an ModalProvider');
  }

  return context;
}

export { PokedexProvider, usePokedex };
