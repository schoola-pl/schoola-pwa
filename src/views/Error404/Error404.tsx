import Error404Icon from 'assets/icons/Error404Icon.svg';
import { Wrapper, ErrorDiv, StyledButton } from './Error404.styles';

const Error404 = () => (
  <Wrapper>
    <h1>Nie znaleziono takiej strony!</h1>
    <ErrorDiv icon={Error404Icon} />
    <StyledButton as="a" href="/">
      Powrót
    </StyledButton>
  </Wrapper>
);

export default Error404;
