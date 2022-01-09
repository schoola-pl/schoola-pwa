import React, { useEffect } from 'react';
import { Form, StyledButton, StyledInput, StyledLogo, Wrapper } from './Login.styles';
import AuthCard from 'components/molecules/AuthCard/AuthCard';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from 'store';
import { useRoutesControl } from '../../../../hooks/useRoutesControl';
import { getJWT } from '../../../../helpers/jwt';
import { dashboardRoute } from '../../../../routes';
import { useNavigate } from 'react-router';
import ErrorParagraph from '../../../../components/atoms/ErrorParagraph/ErrorParagraph';
import { getPathForRole } from '../../../../helpers/roles';

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
      navigate(dashboardRoute);
    } else if (isSuccess) {
      unlockRoutes(data.jwt, data.user, getPathForRole(data.user.TextRole));
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
            error={!!formError.login}
            {...register('login', {
              required: true,
              minLength: 2
            })}
          />
          {formError.login && <ErrorParagraph>Podaj poprawny login!</ErrorParagraph>}
          <StyledInput
            type="password"
            placeholder="Hasło"
            error={!!formError.password}
            {...register('password', {
              required: true,
              minLength: 6
            })}
          />
          {formError.password && <ErrorParagraph>Podaj poprawne hasło!</ErrorParagraph>}
          <StyledButton type="submit">
            {!isLoading && !isError ? 'Zaloguj się' : !isError && isLoading ? 'Sprawdzam dane...' : 'Spróbuj ponownie!'}
          </StyledButton>
        </Form>
      </AuthCard>
    </Wrapper>
  );
};

export default Login;