import React, { useEffect } from 'react';
import { Form, StyledButton, StyledInput, StyledLogo, Wrapper } from './Login.styles';
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

const Login: React.FC = () => {
  const [loginProtocol, { isLoading, isSuccess, isError, data }] = useLoginMutation();
  const { unlockRoutes } = useRoutesControl();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors: formError },
    handleSubmit
  } = useForm();

  useEffect(() => {
    if (getJWT()) {
      const lsRole = getRoleFromLocalStorage();
      if (lsRole) {
        navigate(getPathForRole(lsRole));
      } else {
        navigate(dashboardRoute.replaceAll('*', ''));
      }
    } else if (isSuccess) {
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
        <StyledLogo />
        <Form onSubmit={handleSubmit(handleLogin)}>
          <StyledInput
            type="text"
            placeholder="Login"
            data-cy="login-username"
            error={!!formError.login || isError}
            {...register('login', {
              required: true,
              minLength: 2
            })}
          />
          {formError.login && <ErrorParagraph>Podaj poprawny login!</ErrorParagraph>}
          <StyledInput
            type="password"
            placeholder="Hasło"
            data-cy="login-password"
            error={!!formError.password || isError}
            {...register('password', {
              required: true,
              minLength: 6
            })}
          />
          {formError.password && <ErrorParagraph>Podaj poprawne hasło!</ErrorParagraph>}
          <StyledButton error={isError} type="submit" data-cy="login-button">
            {!isLoading && !isError ? (
              'Zaloguj się'
            ) : !isError && isLoading ? (
              <>
                Logowanie... <Loader style={{ marginLeft: '1rem' }} fitContent />
              </>
            ) : (
              'Spróbuj ponownie!'
            )}
          </StyledButton>
        </Form>
      </AuthCard>
    </Wrapper>
  );
};

export default Login;
