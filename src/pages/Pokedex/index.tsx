import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import PokeballSvg from '../../assets/mono-pokeball.svg';
import HeaderWrapper from '../../components/HeaderWrapper';
import {
  Container,
  MainContainer,
  OptionCard,
  OptionCardText,
  OptionCardWrapper,
  Title,
  TitleWrapper,
} from './styles';

interface Option {
  text: string;
  color: string;
  onClick: Function;
}

const index = () => {
  const navigator = useNavigation();

  const Options: Option[] = [
    {
      text: 'Generation I',
      color: '#48d0b0',
      onClick: () => {
        navigator.navigate('PokedexList', { pokedexId: 2 });
      },
    },
    {
      text: 'Generation II',
      color: '#f7786b',
      onClick: () => {
        navigator.navigate('PokedexList', { pokedexId: 3 });
      },
    },
    {
      text: 'Generation III',
      color: '#58aaf6',
      onClick: () => {
        navigator.navigate('PokedexList', { pokedexId: 4 });
      },
    },
    {
      text: 'Generation IV',
      color: '#58aaf6',
      onClick: () => {
        navigator.navigate('PokedexList', { pokedexId: 5 });
      },
    },
  ];

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
        <PokeballSvg
          width={200}
          height={200}
          style={{ position: 'absolute', right: -50, top: -50 }}
          color={'#00000020'}
        />
        <TitleWrapper>
          <Title>Which region would </Title>
          <Title>you like to check?</Title>
        </TitleWrapper>
        <OptionCardWrapper>
          {Options.map((opt) => {
            return (
              <OptionCard
                key={opt.text}
                color={opt.color}
                onPress={() => {
                  opt.onClick();
                }}
              >
                <PokeballSvg
                  width={70}
                  height={70}
                  style={{ position: 'absolute', right: 0, bottom: 0 }}
                  color={'#00000020'}
                />
                <OptionCardText>{opt.text}</OptionCardText>
              </OptionCard>
            );
          })}
        </OptionCardWrapper>
      </Container>
    </MainContainer>
  );
};
export default index;
