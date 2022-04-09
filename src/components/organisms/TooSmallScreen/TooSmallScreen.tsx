import React from 'react';
import { LogoutButton, Wrapper } from './TooSmallScreen.styles';
import Button from 'components/atoms/Button/Button';
import { useAuth } from '../../../hooks/useAuth';

const TooSmallScreen: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Wrapper>
      <h1>Aby móc korzystać z panelu administratora szkolnego, musisz mieć większy ekran (np. komputer)!</h1>
      <p>Odśwież, aby załadować ponownie!</p>
      <div>
        <Button onClick={() => window.location.reload()}>Odśwież</Button>
        <LogoutButton onClick={() => signOut({})}>Wyloguj się</LogoutButton>
      </div>
    </Wrapper>
  );
};

export default TooSmallScreen;
