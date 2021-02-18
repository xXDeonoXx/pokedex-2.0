import React from 'react';
import Pokemon from '../../../../@Types/Pokemon';
import capitalize from '../../../../utils/capitalize';
import {
  FlavorText,
  InfoContainer,
  InfoLabel,
  InfoText,
  InfoWrapper,
  MainContainer,
} from './styles';

interface AboutProps {
  pokemon?: Pokemon;
}

const index = ({ pokemon }: AboutProps) => {
  return (
    <MainContainer>
      <FlavorText>
        {pokemon?.flavor_text.replace(/(\r\n|\n|\r)/gm, ' ')}
      </FlavorText>
      <InfoContainer>
        <InfoWrapper>
          <InfoLabel>Height</InfoLabel>
          <InfoText>{`${Number(pokemon?.height) / 10}m `}</InfoText>
        </InfoWrapper>
        <InfoWrapper>
          <InfoLabel>Weight</InfoLabel>
          <InfoText>{`${Number(pokemon?.weight) / 10}kg`}</InfoText>
        </InfoWrapper>
        <InfoWrapper>
          <InfoLabel>Abilities</InfoLabel>
          <InfoText>{`${pokemon?.abilities?.map((ab, index) => {
            return index === pokemon?.abilities?.length - 1
              ? ' ' + capitalize(ab)
              : capitalize(ab);
          })}`}</InfoText>
        </InfoWrapper>
        <InfoWrapper>
          <InfoLabel>Habitat</InfoLabel>
          <InfoText>{`${capitalize(pokemon?.habitat || '')}`}</InfoText>
        </InfoWrapper>
      </InfoContainer>
    </MainContainer>
  );
};

export default index;
