import styled from 'styled-components/native';

interface OptionCardProps {
  color: string;
}

export const MainContainer = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

export const Container = styled.View`
  height: 70%;
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
  background-color: ${({ color }) => color || 'white'};
  width: 45%;
  height: 75px;
  margin: 8px;
  border-radius: 25px;
  elevation: 5;
  justify-content: center;
  padding: 15px;
`;

export const OptionCardText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

export const Bottom = styled.View`
  height: 30%;
`;

export const BottomTitleWrapper = styled.View`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 50px;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const BottomTitle = styled.Text`
  font-size: 24px;
  color: black;
  font-weight: bold;
`;

export const BottomViewAll = styled.Text`
  font-size: 18px;
  color: #98a0e1;
  font-weight: bold;
`;
