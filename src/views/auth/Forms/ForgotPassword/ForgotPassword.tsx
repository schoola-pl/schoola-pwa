import { Form, StyledInput, StyledLink, StyledLogo, Wrapper } from './ForgotPassword.styles';
import Button from 'components/atoms/Button/Button';
import AuthCard from 'components/molecules/AuthCard/AuthCard';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ErrorParagraph from 'components/atoms/ErrorParagraph/ErrorParagraph';

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [error, setError] = useState<number | null>(null);

  const handleRestoreEmail = ({ email }: { email: string }) => {
    console.log(email);
  };

  return (
    <Wrapper>
      <AuthCard>
        <StyledLogo />
        <Form onSubmit={handleSubmit(handleRestoreEmail)}>
          <StyledInput
            placeholder="Podaj swój email"
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
            })}
          />
          {errors.email && <ErrorParagraph style={{ marginBottom: '2rem' }}>Podaj prawidłowy adres email!</ErrorParagraph>}
          <Button>Potwierdź</Button>
          <StyledLink to="/login">Masz już konto?</StyledLink>
        </Form>
      </AuthCard>
    </Wrapper>
  );
};

export default ForgotPassword;
