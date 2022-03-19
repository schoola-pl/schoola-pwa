import { IconDiv, StyledButton, Wrapper } from './FinishPage.styles';
import FinishIcon from 'assets/icons/FinishIcon.svg';
import { useUser } from 'hooks/useUser';
import React from 'react';
import { counterItemName } from '../../../../components/templates/FirstLoginTemplate/FirstLoginTemplate';

const FinishPage: React.FC = () => {
  const { updateSettings } = useUser();

  return (
    <Wrapper>
      <h1>Wszystko gotowe!</h1>
      <IconDiv icon={FinishIcon} />
      <StyledButton
        onClick={() => {
          localStorage.removeItem(counterItemName);
          updateSettings({ confirmed: true });
        }}
      >
        Przejdź do aplikacji!
      </StyledButton>
    </Wrapper>
  );
};

export default FinishPage;
