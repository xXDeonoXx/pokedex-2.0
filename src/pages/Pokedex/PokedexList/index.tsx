import React, { useEffect, useState } from 'react';
import { PokemonColors } from '../../../shared/PokemonColors';
import Pokemon from '../../../@Types/Pokemon';
import Icon from 'react-native-vector-icons/Feather';
import {
  Card,
  CardImage,
  CardInnerContainer,
  CardNumber,
  CardTitle,
  Container,
  List,
  MainContainer,
  Title,
} from './styles';
import capitalize from '../../../utils/capitalize';
import { usePokedex } from '../../../hooks/pokedex';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import LoadingScreen from '../../../components/LoadingScreen';
import HeaderWrapper from '../../../components/HeaderWrapper';

const index = () => {
  const { setPokedex, pokemons } = usePokedex();
  const navigator = useNavigation();
  const router = useRoute();

  const [loading, setLoading] = useState(true);
  // const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const func = async () => {
      try {
        const { pokedexId } = router?.params;
        await setPokedex(pokedexId);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    func();
  }, []);

  const PokemonCard = ({ item: pokemon }: { item: Pokemon }) => {
    return (
      <Card
        onPress={() => {
          alert('clicou');
        }}
        color={PokemonColors[pokemon.color] || pokemon.color}
      >
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

  if (loading) return <LoadingScreen />;

  return (
    <MainContainer>
      <Container>
        <HeaderWrapper>
          <Icon
            onPress={() => {
              navigator.goBack();
            }}
            name={'arrow-left'}
            color={'black'}
            size={30}
          />
        </HeaderWrapper>
        <Title>Pokedex</Title>
        <List
          data={pokemons}
          extraData={loading}
          renderItem={PokemonCard}
          keyExtractor={(item) => {
            return item.pokedex_number.toString();
          }}
          showsVerticalScrollIndicator={false}
        />
        {/* {pokemons.map((pokemon) => {
          return PokemonCard(pokemon);
        })} */}
      </Container>
    </MainContainer>
  );
};
export default index;
