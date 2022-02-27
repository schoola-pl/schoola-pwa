import { Form, StyledInput, StyledLink, StyledLogo, Wrapper } from './ForgotPassword.styles';
import Button from 'components/atoms/Button/Button';
import AuthCard from 'components/molecules/AuthCard/AuthCard';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import ErrorParagraph from 'components/atoms/ErrorParagraph/ErrorParagraph';
import axios, { AxiosError } from 'axios';
import ChangePassword from 'views/auth/Forms/ChangePassword/ChangePassword';

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<number | null>(null);
  const [codeSecret, setCodeSecret] = useState<string>('');

  const handleRestoreEmail = async ({ email }: { email: string }) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/forgot-password`, { email });
      if (response.status === 200) setIsSuccess(true);
    } catch (err) {
      const error = err as AxiosError;
      setError(error.response?.status || 500);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) setCodeSecret(code);
  }, []);

  return (
    <Wrapper>
      {!codeSecret ? (
        <AuthCard>
          <StyledLogo />
          <Form onSubmit={handleSubmit(handleRestoreEmail)}>
            <StyledInput
              placeholder="Podaj swój email"
              disabled={isSuccess}
              {...register('email', {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
              })}
            />
            {errors.email && <ErrorParagraph style={{ marginBottom: '2rem' }}>Podaj prawidłowy adres email!</ErrorParagraph>}
            <Button isDanger={!!error} isDisabled={isSuccess}>
              {!error
                ? !isLoading
                  ? isSuccess
                    ? "Sprawdź mail'a!"
                    : 'Potwierdź'
                  : 'Wysyłanie...'
                : error === 400
                ? 'Niepoprawny e-mail!'
                : 'Nieoczekiwany błąd'}
            </Button>
            <StyledLink to="/login">Masz już konto?</StyledLink>
          </Form>
        </AuthCard>
      ) : (
        <ChangePassword isRestore={codeSecret} />
      )}
    </Wrapper>
  );
};

export default ForgotPassword;
