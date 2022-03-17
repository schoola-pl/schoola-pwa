import React from 'react';
import { LogoutButton, Wrapper } from './TooBigScreen.styles';
import Button from 'components/atoms/Button/Button';
import { useUser } from 'hooks/useUser';

const TooBigScreen: React.FC = () => {
  const reload = () => window.location.reload();
  const { logout } = useUser();

  return (
    <Wrapper>
      <h1>
        Dostęp do naszej aplikacji jest na ten moment możliwy tylko na telefonach! <br /> Pracujemy nad tym, aby był on na większych ekranach 😃
      </h1>
      <p>Odśwież, aby załadować ponownie!</p>
      <div>
        <Button onClick={reload}>Odśwież</Button>
        <LogoutButton onClick={logout}>Wyloguj się</LogoutButton>
      </div>
    </Wrapper>
  );
};

export default TooBigScreen;
