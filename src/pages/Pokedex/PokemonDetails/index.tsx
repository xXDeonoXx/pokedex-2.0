import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { SharedElement } from 'react-navigation-shared-element';
import Pokemon from '../../../@Types/Pokemon';
import HeaderWrapper from '../../../components/HeaderWrapper';
import LoadingScreen from '../../../components/LoadingScreen';
import {
  TopContainer,
  MainContainer,
  PokemonImage,
  Title,
  ImageWrapper,
  BottomContainer,
} from './styles';
import { PokemonColors } from '../../../shared/PokemonColors';
import capitalize from '../../../utils/capitalize';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import About from './About';
import BaseStats from './BaseStats';

const index = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [tabIndex, setTabIndex] = useState(0);
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

  const TestView = () => {
    return (
      <View>
        <Text>teste</Text>
      </View>
    );
  };

  const renderScene = ({ route }: { route: { key: string } }) => {
    switch (route.key) {
      case 'about':
        return <About pokemon={pokemon} />;
      case 'baseStats':
        return <BaseStats pokemon={pokemon} />;
      case 'evolution':
        return <TestView />;
      case 'moves':
        return <TestView />;
      default:
        return null;
    }
  };

  // if (loading || !pokemon) return <LoadingScreen />;

  return (
    <MainContainer color={PokemonColors[pokemon?.color]}>
      <TopContainer color={PokemonColors[pokemon?.color]}>
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
          id={`item.${pokemon?.name}.text`}
        >
          <Title>{capitalize(pokemon?.name || '')}</Title>
        </SharedElement>
        <ImageWrapper>
          <SharedElement id={`item.${pokemon?.pokedex_number}.image`}>
            <PokemonImage
              resizeMode={'stretch'}
              source={{
                uri: pokemon?.image_url,
              }}
            />
          </SharedElement>
        </ImageWrapper>
      </TopContainer>
      <BottomContainer>
        <TabView
          removeClippedSubviews
          renderTabBar={(props) => {
            return (
              <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: '#8f98e3' }}
                style={{ backgroundColor: 'transparent', marginBottom: 20 }}
                labelStyle={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 12,
                }}
                tabStyle={{ padding: 0 }}
              />
            );
          }}
          navigationState={{
            index: tabIndex,
            routes: [
              { key: 'about', title: 'About' },
              { key: 'baseStats', title: 'Base Stats' },
              { key: 'evolution', title: 'Evolution' },
              { key: 'moves', title: 'Moves' },
            ],
          }}
          onIndexChange={(index) => {
            setTabIndex(index);
          }}
          renderScene={renderScene}
        />
      </BottomContainer>
    </MainContainer>
  );
};

index.sharedElements = (route: any) => {
  return [
    {
      id: `item.${route.params.pokemon.pokedex_number}.image`,
      animation: 'fade',
    },
    { id: `item.${route.params.pokemon.name}.text`, animation: 'fade' },
  ];
};

export default index;
