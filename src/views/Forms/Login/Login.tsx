import React, { useEffect, useState } from 'react';
import { Form, StyledButton, StyledInput, StyledLink, Wrapper } from './Login.styles';
import AuthCard from 'components/molecules/AuthCard/AuthCard';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { dashboardRoute } from 'routes';
import { useNavigate } from 'react-router';
import { getPathForRole, getRoleFromLocalStorage } from 'helpers/roles';
import Loader from 'components/atoms/Loader/Loader';
import Logo from 'components/atoms/Logo/Logo';
import ErrorParagraph from 'components/atoms/ErrorParagraph/ErrorParagraph';

const Login: React.FC = () => {
  const { currentUser, signIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const { register, handleSubmit, watch } = useForm();
  const loginInput = watch('login');
  const passwordInput = watch('password');

  useEffect(() => {
    // It checks does user is logged in
    if (currentUser) {
      const role = getRoleFromLocalStorage();
      // And redirects him to right place
      if (role) {
        navigate(getPathForRole(role));
      } else {
        navigate(dashboardRoute.replaceAll('*', ''));
      }
    }
  }, []);

  const handleLogin = async ({ login, password }: { login: string; password: string }) => {
    setIsLoading(true);
    const response = await signIn({ username: login, password });
    if (!response.success) setError('Podano niepoprawny login lub hasło!');
    setIsLoading(false);
  };

  return (
    <Wrapper>
      <AuthCard>
        <div>
          <Logo />
          <p>Zaloguj się na swoje konto!</p>
        </div>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <StyledInput
            type="text"
            placeholder="Login"
            data-cy="login-username"
            {...register('login', {
              required: true,
              minLength: 2
            })}
          />
          <StyledInput
            type="password"
            placeholder="Hasło"
            data-cy="login-password"
            {...register('password', {
              required: true,
              minLength: 6
            })}
          />
          <StyledButton isDisabled={!loginInput || !passwordInput} type="submit" data-cy="login-button">
            {!isLoading ? (
              'Zaloguj się'
            ) : (
              <>
                Logowanie... <Loader style={{ marginLeft: '1rem' }} fitContent />
              </>
            )}
          </StyledButton>
          {isError && <ErrorParagraph>{isError}</ErrorParagraph>}
        </Form>
        <StyledLink to="/forgot-password">Nie pamiętasz hasła?</StyledLink>
      </AuthCard>
    </Wrapper>
  );
};

export default Login;
