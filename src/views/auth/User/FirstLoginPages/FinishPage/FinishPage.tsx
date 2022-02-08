import { IconDiv, StyledButton, Wrapper } from './FinishPage.styles';
import FinishIcon from 'assets/icons/FinishIcon.svg';
import { useUser } from 'hooks/useUser';

const FinishPage = () => {
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
