import React from 'react';
import Pokemon from '../../../../@Types/Pokemon';
import capitalize from '../../../../utils/capitalize';
import * as Progress from 'react-native-progress';

import {
  InfoContainer,
  InfoLabel,
  InfoText,
  InfoWrapper,
  MainContainer,
} from './styles';
import { View } from 'react-native';

interface AboutProps {
  pokemon?: Pokemon;
}

const index = ({ pokemon }: AboutProps) => {
  return (
    <MainContainer>
      <InfoContainer>
        {pokemon?.stats.map((stat, index) => {
          return (
            <InfoWrapper key={stat.name}>
              <View
                style={{
                  display: 'flex',
                  flex: 0.8,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <InfoLabel>{capitalize(stat.name)}</InfoLabel>
                <InfoText>{`${Number(stat.base_stat)}`}</InfoText>
              </View>
              <Progress.Bar
                progress={stat.base_stat / 200}
                height={10}
                unfilledColor={'#f0f0f0'}
                borderWidth={0}
                color={index % 2 ? '#E97451' : '#AFE1AF'}
                style={{ padding: 0, height: 10 }}
              />
            </InfoWrapper>
          );
        })}
      </InfoContainer>
    </MainContainer>
  );
};

export default index;
