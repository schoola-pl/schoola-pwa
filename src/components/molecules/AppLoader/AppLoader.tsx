import React from 'react';
import { Background, Loader, Text } from './AppLoader.styles';

interface props {
  loadingText: string;
}

const AppLoader: React.FC<props> = ({ loadingText }) => {
  return (
    <Background>
      <Loader />
      <Text>{loadingText}</Text>
    </Background>
  );
};

export default AppLoader;
