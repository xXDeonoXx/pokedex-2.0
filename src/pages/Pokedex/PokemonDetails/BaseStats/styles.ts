import styled from 'styled-components/native';

export const MainContainer = styled.View`
  flex: 1;
  background-color: transparent;
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
  align-items: center;
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
`;
