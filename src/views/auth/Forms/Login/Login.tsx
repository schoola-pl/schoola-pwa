import React, { useEffect } from 'react';
import { Form, StyledButton, StyledInput, StyledLink, Wrapper } from './Login.styles';
import AuthCard from 'components/molecules/AuthCard/AuthCard';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from 'store';
import { useRoutesControl } from 'hooks/useRoutesControl';
import { getJWT } from 'helpers/jwt';
import { dashboardRoute } from 'routes';
import { useNavigate } from 'react-router';
import ErrorParagraph from '../../../../components/atoms/ErrorParagraph/ErrorParagraph';
import { getPathForRole, getRoleFromLocalStorage } from 'helpers/roles';
import Loader from 'components/atoms/Loader/Loader';
import Logo from 'components/atoms/Logo/Logo';

const Login: React.FC = () => {
  const [loginProtocol, { isLoading, isSuccess, isError, data }] = useLoginMutation();
  const { unlockRoutes } = useRoutesControl();
  const navigate = useNavigate();

  const { register, handleSubmit, watch } = useForm();
  const loginInput = watch('login');
  const passwordInput = watch('password');

  useEffect(() => {
    if (getJWT()) {
      const lsRole = getRoleFromLocalStorage();
      if (lsRole) {
        navigate(getPathForRole(lsRole));
      } else {
        navigate(dashboardRoute.replaceAll('*', ''));
      }
    } else if (isSuccess && data) {
      unlockRoutes(data.jwt, data.user, getPathForRole(data.user.TextRole));
      localStorage.setItem('role', data.user.TextRole);
    }
    // eslint-disable-next-line
  }, [data]);

  const handleLogin = async ({ login, password }: { login: string; password: string }) => {
    loginProtocol({
      identifier: login,
      password
    });
  };

  return (
    <Wrapper>
      <AuthCard>
        <Logo />
        <Form onSubmit={handleSubmit(handleLogin)}>
          <StyledInput
            type="text"
            placeholder="Login lub email"
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
          {isError && <ErrorParagraph>Podano niepoprawny login lub hasło!</ErrorParagraph>}
        </Form>
        <StyledLink to="/forgot-password">Nie pamiętasz hasła?</StyledLink>
      </AuthCard>
    </Wrapper>
  );
};

export default Login;
