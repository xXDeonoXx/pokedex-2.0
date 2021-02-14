import styled from 'styled-components/native';

interface OptionCardProps {
  color: string;
}

export const MainContainer = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

export const Container = styled.View`
  flex: 1;
  background-color: white;
  border-radius: 30px;
`;

export const TitleWrapper = styled.View`
  width: 80%;
  margin-top: 30px;
  margin-bottom: 50px;
  padding: 12px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: black;
`;

export const OptionCardWrapper = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export const OptionCard = styled.TouchableOpacity<OptionCardProps>`
  background-color: white;
  width: 45%;
  height: 130px;
  margin: 8px;
  border-radius: 25px;
  elevation: 5;
  padding: 15px;
  justify-content: flex-start;
  align-items: center;
`;

export const OptionCardText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;
