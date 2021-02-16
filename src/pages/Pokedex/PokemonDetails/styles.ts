import styled from 'styled-components/native';

interface ContainerProps {
  color?: string;
}

export const MainContainer = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({ color }) => color || 'white'};
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: white;
`;

export const ImageWrapper = styled.View`
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;
`;

export const PokemonImage = styled.Image`
  height: 250px;
  width: 250px;
`;
