import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const window = Dimensions.get('window');

interface CardProps {
  color: string;
}

export const MainContainer = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

export const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 20px;
`;

export const Card = styled.View<CardProps>`
  height: 100px;
  width: 100%;
  border-radius: 12px;
  margin-bottom: 10px;
  justify-content: space-between;
  background-color: ${({ color }) => color || 'white'};
  elevation: 5;
  flex-direction: row;
`;

export const CardImage = styled.Image`
  width: 30%;
  height: 100%;
`;

export const CardInnerContainer = styled.View`
  flex: 1;
  padding: 10px;
`;

export const CardTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: white;
`;

export const CardNumber = styled.Text`
  font-size: 42px;
  font-weight: bold;
  color: #ffffffaa;
  position: absolute;
  right: 0;
  bottom: 0;
`;
