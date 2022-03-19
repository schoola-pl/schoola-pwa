import { IconDiv, StyledButton, Wrapper } from './FinishPage.styles';
import FinishIcon from 'assets/icons/FinishIcon.svg';
import { useUser } from 'hooks/useUser';
import React from 'react';
import { counterItemName as counterUser } from '../../../../components/templates/FirstLoginTemplate/FirstLoginTemplate';
import { counterItemName as counterPsycho } from '../../../../components/templates/PsychoLoginTemplate/PsychoLoginTemplate';

const FinishPage: React.FC = () => {
  const { updateSettings } = useUser();

  return (
    <Wrapper>
      <h1>Wszystko gotowe!</h1>
      <IconDiv icon={FinishIcon} />
      <StyledButton
        onClick={() => {
          localStorage.removeItem(counterUser);
          localStorage.removeItem(counterPsycho);
          updateSettings({ confirmed: true });
        }}
      >
        Przejdź do aplikacji!
      </StyledButton>
    </Wrapper>
  );
};

export default FinishPage;
