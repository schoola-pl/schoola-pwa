import React from 'react';
import { Wrapper } from './TooSmallScreen.styles';

const TooSmallScreen: React.FC = () => {
  return (
    <Wrapper>
      <h1>Aby móc korzystać z panelu administratora szkolnego, musisz mieć większy ekran (np. komputer)!</h1>
      <p>Odśwież, aby załadować ponownie!</p>
    </Wrapper>
  );
};

export default TooSmallScreen;
