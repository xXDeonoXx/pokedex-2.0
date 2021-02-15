import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MainContainer, Message } from './styles';

interface LoadingScreenProps {
  message?: string;
}

const index = ({ message }: LoadingScreenProps) => {
  return (
    <MainContainer>
      <ActivityIndicator size="large" color="#d60a2e" />
      <Message>{message}</Message>
    </MainContainer>
  );
};

export default index;
