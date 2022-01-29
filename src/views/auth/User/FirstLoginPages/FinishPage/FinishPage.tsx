import { Wrapper, StyledButton, IconDiv } from './FinishPage.styles';
import FinishIcon from 'assets/icons/FinishIcon.svg';

const FinishPage = () => (
  <Wrapper>
    <h1>Wszystko gotowe!</h1>
    <IconDiv icon={FinishIcon} />
    <StyledButton as="a" href="/home">
      Przejdź do aplikacji!
    </StyledButton>
  </Wrapper>
);

export default FinishPage;
