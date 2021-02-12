import React from 'react';
import { View, Text } from 'react-native';
import {
  Bottom,
  BottomTitle,
  BottomTitleWrapper,
  BottomViewAll,
  Container,
  MainContainer,
  OptionCard,
  OptionCardText,
  OptionCardWrapper,
  Title,
  TitleWrapper,
} from './styles';

import PokeballSvg from '../../assets/mono-pokeball.svg';

interface Option {
  text: string;
  color: string;
  onClick: Function;
}

const index = () => {
  const Options: Option[] = [
    {
      text: 'Pokedex',
      color: '#48d0b0',
      onClick: () => {
        alert('clicou');
      },
    },
    {
      text: 'Moves',
      color: '#f7786b',
      onClick: () => {
        alert('clicou');
      },
    },
    {
      text: 'Abilities',
      color: '#58aaf6',
      onClick: () => {
        alert('clicou');
      },
    },
    {
      text: 'Items',
      color: '#ffce4b',
      onClick: () => {
        alert('clicou');
      },
    },
    {
      text: 'Locationss',
      color: '#7c538c',
      onClick: () => {
        alert('clicou');
      },
    },
    {
      text: 'Type Charts',
      color: '#b0736c',
      onClick: () => {
        alert('clicou');
      },
    },
  ];

  return (
    <MainContainer>
      <Container>
        <PokeballSvg
          width={200}
          height={200}
          style={{ position: 'absolute', right: -50, top: -50 }}
          color={'#00000020'}
        />

        <TitleWrapper>
          <Title>What Pokemon </Title>
          <Title>are you looking for?</Title>
        </TitleWrapper>
        <OptionCardWrapper>
          {Options.map((opt) => {
            return (
              <OptionCard key={opt.text} color={opt.color}>
                <PokeballSvg
                  width={70}
                  height={70}
                  style={{ position: 'absolute', right: 0 }}
                  color={'#00000020'}
                />
                <OptionCardText>{opt.text}</OptionCardText>
              </OptionCard>
            );
          })}
        </OptionCardWrapper>
      </Container>
      <Bottom>
        <BottomTitleWrapper>
          <BottomTitle>Pokémon News</BottomTitle>
          <BottomViewAll>View All</BottomViewAll>
        </BottomTitleWrapper>
      </Bottom>
    </MainContainer>
  );
};
export default index;
