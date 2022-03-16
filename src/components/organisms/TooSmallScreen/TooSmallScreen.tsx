import React from 'react';
import { Wrapper, LogoutButton } from './TooSmallScreen.styles';
import Button from 'components/atoms/Button/Button';
import { useUser } from 'hooks/useUser';

const TooSmallScreen: React.FC = () => {
  const reload = () => window.location.reload();
  const { logout } = useUser();
  return (
    <Wrapper>
      <h1>Aby móc korzystać z panelu administratora szkolnego, musisz mieć większy ekran (np. komputer)!</h1>
      <p>Odśwież, aby załadować ponownie!</p>
      <div>
        <Button onClick={reload}>Odśwież</Button>
        <LogoutButton onClick={logout}>Wyloguj się</LogoutButton>
      </div>
    </Wrapper>
  );
};

export default TooSmallScreen;
