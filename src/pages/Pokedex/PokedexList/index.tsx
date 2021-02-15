import React, { useEffect, useState } from 'react';
import { PokemonColors } from '../../../shared/PokemonColors';
import Pokemon from '../../../@Types/Pokemon';
import getPokedexEntries from '../../../utils/getPokedexEntries';
import {
  Card,
  CardImage,
  CardInnerContainer,
  CardNumber,
  CardTitle,
  Container,
  List,
  MainContainer,
} from './styles';
import capitalize from '../../../utils/capitalize';

const index = () => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const func = async () => {
      const pks: Pokemon[] | undefined = await getPokedexEntries(2);
      if (pks) {
        setPokemons(pks);
        setLoading(false);
      }
    };
    func();
  }, []);

  const PokemonCard = ({ item: pokemon }: { item: Pokemon }) => {
    return (
      <Card color={PokemonColors[pokemon.color] || pokemon.color}>
        <CardImage
          resizeMode={'cover'}
          source={{
            uri: pokemon.image_url,
          }}
        />
        <CardInnerContainer>
          <CardTitle>{capitalize(pokemon.name)}</CardTitle>
          <CardNumber>#{pokemon.pokedex_number}</CardNumber>
        </CardInnerContainer>
      </Card>
    );
  };

  return (
    <MainContainer>
      <Container>
        <List
          data={pokemons}
          renderItem={PokemonCard}
          keyExtractor={(item) => item.entry_number}
        />
        {/* {pokemons.map((pokemon) => {
          return PokemonCard(pokemon);
        })} */}
      </Container>
    </MainContainer>
  );
};
export default index;
