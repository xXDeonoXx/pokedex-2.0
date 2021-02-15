import { Router, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Route, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Pokemon from '../../../@Types/Pokemon';
import HeaderWrapper from '../../../components/HeaderWrapper';
import LoadingScreen from '../../../components/LoadingScreen';
import { Container, MainContainer, PokemonImage, Title } from './styles';

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
        console.log(pokemon);
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
      <Container>
        <View>
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
          <Title>Bulbasaur</Title>
        </View>
        <PokemonImage
          resizeMode={'cover'}
          source={{
            uri: pokemon?.image_url,
          }}
        />
      </Container>
    </MainContainer>
  );
};

export default index;
