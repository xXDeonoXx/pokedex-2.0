import React from 'react';
import {
  Card,
  CardImage,
  CardInnerContainer,
  CardNumber,
  CardTitle,
  Container,
  MainContainer,
} from './styles';

interface Option {
  text: string;
  color: string;
  onClick: Function;
}

const index = () => {
  return (
    <MainContainer>
      <Container>
        <Card color={'#91caa7'}>
          <CardImage
            resizeMode={'cover'}
            source={{
              uri:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
            }}
          />
          <CardInnerContainer>
            <CardTitle>Bulbasaur</CardTitle>
            <CardNumber>#001</CardNumber>
          </CardInnerContainer>
        </Card>
      </Container>
    </MainContainer>
  );
};
export default index;
