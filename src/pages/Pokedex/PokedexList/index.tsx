import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { SharedElement } from 'react-navigation-shared-element';
import Pokemon from '../../../@Types/Pokemon';
import HeaderWrapper from '../../../components/HeaderWrapper';
import LoadingScreen from '../../../components/LoadingScreen';
import { usePokedex } from '../../../hooks/pokedex';
import { PokemonColors } from '../../../shared/PokemonColors';
import capitalize from '../../../utils/capitalize';
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

const index = () => {
  const { setPokedex, pokemons } = usePokedex();
  const navigator = useNavigation();
  const router = useRoute();

  const window = Dimensions.get('window');

  const [loading, setLoading] = useState(true);
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const onListScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true }
  );

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

  const PokemonCard = ({
    item: pokemon,
    index,
  }: {
    item: Pokemon;
    index: number;
  }) => {
    const inputRange = [-1, 0, 110 * index, 110 * (index + 1)];

    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [0, 1, 1, 0],
    });

    return (
      <Card
        onPress={() => {
          navigator.navigate('PokemonDetails', { pokemon });
        }}
        color={PokemonColors[pokemon.color] || pokemon.color}
        style={{ opacity, transform: [{ scale: opacity }] }}
      >
        <SharedElement id={`item.${pokemon.pokedex_number}.image`}>
          <CardImage
            resizeMode={'cover'}
            source={{
              uri: pokemon.image_url,
            }}
          />
        </SharedElement>

        <CardInnerContainer>
          <SharedElement
            style={{ width: 200, height: 80 }}
            id={`item.${pokemon.name}.text`}
          >
            <CardTitle>{capitalize(pokemon.name)}</CardTitle>
          </SharedElement>
          <CardNumber>#{pokemon.pokedex_number}</CardNumber>
        </CardInnerContainer>
      </Card>
    );
  };

  if (loading)
    return <LoadingScreen message={'Geting updated data, please wait.'} />;

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
          <Title>Pokedex</Title>
        </View>
        <List
          scrollEventThrottle={16}
          data={pokemons}
          extraData={loading}
          renderItem={PokemonCard}
          keyExtractor={(item) => {
            return item.pokedex_number.toString();
          }}
          showsVerticalScrollIndicator={false}
          onScroll={onListScroll}
        />
      </Container>
    </MainContainer>
  );
};

export default index;
