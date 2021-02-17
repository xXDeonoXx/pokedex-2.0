import React from 'react';
import Pokemon from '../../../../@Types/Pokemon';
import {
  FlavorText,
  InfoContainer,
  InfoLabel,
  InfoText,
  InfoWrapper,
  MainContainer
} from './styles';

interface AboutProps {
  pokemon?: Pokemon
}

const index = ({pokemon}: AboutProps) => {
console.log(pokemon)
  return (
    <MainContainer>
      <FlavorText>{pokemon?.flavor_text.replace(/(\r\n|\n|\r)/gm, " ")}</FlavorText>
      <InfoContainer>
        <InfoWrapper><InfoLabel>Height</InfoLabel><InfoText>{`${Number(pokemon?.height) / 100}m `}</InfoText></InfoWrapper>
        <InfoWrapper><InfoLabel>Weight</InfoLabel><InfoText>{`${Number(pokemon?.weight) / 100}kg`}</InfoText></InfoWrapper>
      </InfoContainer>
      
    </MainContainer>
  );
};

export default index;
