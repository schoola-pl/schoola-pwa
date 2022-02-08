import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { Link } from 'react-router-dom';
import AuthCard from 'components/molecules/AuthCard/AuthCard';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLogo = styled(Logo)``;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledInput = styled(Input)`
  margin-block: 4rem;
`;

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.accentBlue};
  text-decoration: none;
  padding-top: 1.5rem;
`;

const ForgotPassword = () => (
  <Wrapper>
    <AuthCard>
      <StyledLogo />
      <Form>
        <StyledInput placeholder="Podaj swój email" />
        <Button>Potwierdź</Button>
        <StyledLink to="/login">Masz już konto?</StyledLink>
      </Form>
    </AuthCard>
  </Wrapper>
);

export default ForgotPassword;
