import Error404Icon from 'assets/icons/Error404Icon.svg';
import { ErrorDiv, StyledButton, Wrapper } from './Error404.styles';
import { useNavigate } from 'react-router';

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h1>Nie znaleziono takiej strony!</h1>
      <ErrorDiv icon={Error404Icon} />
      <StyledButton onClick={() => navigate(-1)}>Powrót</StyledButton>
    </Wrapper>
  );
};

export default Error404;
