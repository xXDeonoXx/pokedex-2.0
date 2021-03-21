import styled from 'styled-components/native';

export const MainContainer = styled.ScrollView`
  flex: 1;
  background-color: transparent;
`;

export const FlavorText = styled.Text`
  font-size: 18px;
  color: black;
  margin-bottom: 20px;
`;

export const InfoContainer = styled.View`
  width: 100%;
  height: 150px;
`;

export const InfoWrapper = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const InfoLabel = styled.Text`
  font-size: 14px;
  color: #a0a0a0;
  font-weight: bold;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  color: black;
  font-weight: bold;
  min-width: 50%;
`;
