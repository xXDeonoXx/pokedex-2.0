import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { SharedElement } from 'react-navigation-shared-element';
import Pokemon from '../../../@Types/Pokemon';
import HeaderWrapper from '../../../components/HeaderWrapper';
import LoadingScreen from '../../../components/LoadingScreen';
import {
  Container,
  MainContainer,
  PokemonImage,
  Title,
  ImageWrapper,
} from './styles';
import { PokemonColors } from '../../../shared/PokemonColors';
import capitalize from '../../../utils/capitalize';

const index = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon>();
  const navigator = useNavigation();
  const router = useRoute();

  useEffect(() => {
    const func = async () => {
      try {
        const { pokemon } = router?.params;
        await setPokemon(pokemon);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    func();
  }, []);

  if (loading || !pokemon) return <LoadingScreen />;

  return (
    <MainContainer>
      <Container color={PokemonColors[pokemon?.color]}>
        <View>
          <HeaderWrapper>
            <Icon
              onPress={() => {
                navigator.goBack();
              }}
              name={'arrow-left'}
              color={'white'}
              size={30}
            />
          </HeaderWrapper>
        </View>
        <SharedElement
          style={{ width: 200, height: 80 }}
          id={`item.${pokemon.name}.text`}
        >
          <Title>{capitalize(pokemon.name)}</Title>
        </SharedElement>
        <ImageWrapper>
          <SharedElement id={`item.${pokemon.pokedex_number}.image`}>
            <PokemonImage
              resizeMode={'cover'}
              source={{
                uri: pokemon?.image_url,
              }}
            />
          </SharedElement>
        </ImageWrapper>
      </Container>
    </MainContainer>
  );
};

index.sharedElements = (route: any) => {
  return [
    `item.${route.params.pokemon.pokedex_number}.image`,
    `item.${route.params.pokemon.name}.text`,
  ];
};

export default index;
