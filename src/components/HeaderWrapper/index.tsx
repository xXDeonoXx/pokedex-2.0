import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MainContainer } from './styles';

interface LoadingScreenProps {
  children?: React.ReactNode;
}

const index = ({ children }: LoadingScreenProps) => {
  return <MainContainer>{children}</MainContainer>;
};

export default index;
