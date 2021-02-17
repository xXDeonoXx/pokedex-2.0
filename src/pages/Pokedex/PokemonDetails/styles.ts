import styled from 'styled-components/native';

interface ContainerProps {
  color?: string;
}

export const MainContainer = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({ color }) => color || 'white'};
`;

export const TopContainer = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({ color }) => color || 'white'};
  padding: 20px;
  z-index: 2;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: white;
`;

export const ImageWrapper = styled.View`
  width: 100%;
  height: 250px;
  justify-content: center;
  align-items: center;
`;

export const PokemonImage = styled.Image`
  height: 300px;
  width: 300px;
  z-index: 5;
`;

export const BottomContainer = styled.View`
  height: 50%;
  background-color: white;
  padding: 20px;
  z-index: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-top: 60px;
`;
