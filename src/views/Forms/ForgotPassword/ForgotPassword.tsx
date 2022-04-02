import { Form, StyledInput, StyledLink, Wrapper } from './ForgotPassword.styles';
import Button from 'components/atoms/Button/Button';
import AuthCard from 'components/molecules/AuthCard/AuthCard';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ErrorParagraph from 'components/atoms/ErrorParagraph/ErrorParagraph';
import Loader from 'components/atoms/Loader/Loader';
import Logo from 'components/atoms/Logo/Logo';
import { useAuth } from '../../../hooks/useAuth';

const ForgotPassword = () => {
  // Component states
  const [isLoading, setIsLoading] = useState(false);
  const [cachedUsername, setUsername] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deliveredBy, setDelivery] = useState<null | { name: string; value: string }>(null);

  // Hooks
  const {
    register,
    handleSubmit,
    reset: resetFields,
    watch,
    formState: { errors }
  } = useForm();
  const { resetPassword, resetPasswordSubmit } = useAuth();

  // Inputs which are included in the form are registered here
  const usernameField = watch('username');
  const codeField = watch('code');
  const passwordField = watch('password');

  // Form submit handler
  const handleRestoreEmail = async ({ username, code, password }: { username: string; code: string; password: string }) => {
    // Clean & configure states before other actions
    setError(null);
    setIsLoading(true);

    // Check if the form has been called once before
    if (!deliveredBy) {
      // Send verification link to the specified user
      const res = await resetPassword(username);
      // Check if the request was successful
      if (!res.success && !res?.data?.delivered_by) setError(res.message);
      else {
        // Set states
        setDelivery(res?.data?.delivered_by || { name: 'Error', value: 'Wystąpił problem z dostarczycielem!' });
        setUsername(username);
      }
      // Reset all fields in the form
      resetFields();
    } else {
      // Send the new password to the server (with verification code)
      const res = await resetPasswordSubmit(cachedUsername, code, password);
      if (!res.success) setError(res.message);
      else setIsSuccess(true);
    }
    // Cleanup states after function call
    setIsLoading(false);
  };

  return (
    <Wrapper>
      <AuthCard>
        <div>
          <Logo />
          <p>Zresetuj hasło kilkoma kliknięciami!</p>
        </div>
        <Form onSubmit={handleSubmit(handleRestoreEmail)}>
          {!deliveredBy ? (
            <>
              <StyledInput
                placeholder="Twój login"
                {...register('username', {
                  required: true
                })}
              />
              <Button isDisabled={isLoading || !usernameField} style={{ marginBottom: '0.5rem' }}>
                {!isLoading ? (
                  'Wyślij link'
                ) : (
                  <>
                    Wysyłanie... <Loader style={{ marginLeft: '1rem' }} fitContent />
                  </>
                )}
              </Button>
            </>
          ) : (
            <>
              <StyledInput
                placeholder="Kod weryfikacyjny"
                disabled={isSuccess}
                {...register('code', {
                  required: true
                })}
              />
              <StyledInput
                style={{ marginTop: '0.2rem' }}
                placeholder="Nowe hasło"
                type="password"
                disabled={isSuccess}
                {...register('password', {
                  required: true,
                  pattern: /(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g
                })}
              />
              <Button isDisabled={isLoading || !codeField || !passwordField || isSuccess} style={{ marginBottom: '0.5rem' }}>
                {!isLoading ? (
                  !isSuccess ? (
                    'Zresetuj hasło'
                  ) : (
                    'Zresetowano hasło!'
                  )
                ) : (
                  <>
                    Wysyłanie... <Loader style={{ marginLeft: '1rem' }} fitContent />
                  </>
                )}
              </Button>
            </>
          )}
          {error && <ErrorParagraph style={{ textAlign: 'center', marginTop: '0.5rem' }}>{error}</ErrorParagraph>}
          {errors.password && (
            <ErrorParagraph style={{ textAlign: 'center', marginTop: '0.5rem' }}>Hasło nie spełnia warunków dobrego hasła!</ErrorParagraph>
          )}
        </Form>
        {!deliveredBy || isSuccess ? (
          <StyledLink to="/login">{!isSuccess ? 'Masz już konto?' : 'Powrót na stronę logowania'}</StyledLink>
        ) : (
          <p style={{ fontSize: '1.4rem', paddingInline: '3rem', textAlign: 'center' }}>
            {deliveredBy?.name === 'phone_number'
              ? `Na numer ${deliveredBy?.value} została wysłana wiadomość z linkiem do zmiany hasła!`
              : `Na adres ${deliveredBy?.value} został wysłany link do zmiany hasła!`}
          </p>
        )}
      </AuthCard>
    </Wrapper>
  );
};

export default ForgotPassword;
