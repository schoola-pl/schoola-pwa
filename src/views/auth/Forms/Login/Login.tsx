import React, { useState } from 'react';
import { Form, StyledButton, StyledInput, StyledLogo, Wrapper } from './Login.styles';
import AuthCard from 'components/molecules/AuthCard/AuthCard';
import { useForm } from 'react-hook-form';

const Login: React.FC = () => {
  const [isLoading, setLoadingState] = useState(false);
  const {
    register,
    formState: { errors: formError },
    handleSubmit
  } = useForm();

  const handleLogin = ({ login, password }: { login: string; password: string }) => {
    setLoadingState(true);
    setLoadingState(false);
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
          <StyledInput
            type="password"
            placeholder="Hasło"
            error={!!formError.password}
            {...register('password', {
              required: true,
              minLength: 6
            })}
          />
          <StyledButton type="submit">{!isLoading ? 'Zaloguj się' : 'Sprawdzam dane...'}</StyledButton>
        </Form>
      </AuthCard>
    </Wrapper>
  );
};

export default Login;
