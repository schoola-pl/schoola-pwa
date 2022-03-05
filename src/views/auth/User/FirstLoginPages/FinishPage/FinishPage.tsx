import { IconDiv, StyledButton, Wrapper } from './FinishPage.styles';
import FinishIcon from 'assets/icons/FinishIcon.svg';
import { useUser } from 'hooks/useUser';
import React from 'react';

const FinishPage: React.FC = () => {
  const { updateSettings } = useUser();

  return (
    <Wrapper>
      <h1>Wszystko gotowe!</h1>
      <IconDiv icon={FinishIcon} />
      <StyledButton onClick={() => updateSettings({ confirmed: true })}>Przejdź do aplikacji!</StyledButton>
    </Wrapper>
  );
};

export default FinishPage;
