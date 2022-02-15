import { Wrapper, StyledLogo, Form, StyledInput, StyledLink } from './ForgotPassword.styles';
import Button from 'components/atoms/Button/Button';
import AuthCard from 'components/molecules/AuthCard/AuthCard';

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
