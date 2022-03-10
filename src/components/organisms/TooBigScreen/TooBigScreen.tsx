import React from 'react';
import { Wrapper } from './TooBigScreen.styles';

const TooBigScreen: React.FC = () => {
  return (
    <Wrapper>
      <h1>Dostęp do naszej aplikacji jest na ten moment możliwy tylko na telefonach! Pracujemy nad tym aby był on na większych ekranach 😃</h1>
      <p>Odśwież, aby załadować ponownie!</p>
    </Wrapper>
  );
};

export default TooBigScreen;
