import React from 'react';
import { Form, StyledButton, StyledInput, StyledLogo, Wrapper } from './Login.styles';
import AuthCard from 'components/molecules/AuthCard/AuthCard';
import { useForm } from 'react-hook-form';

const Login: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const handleLogin = ({ login, password }: { login: string; password: string }) => {
    console.log(login, password);
  };

  return (
    <Wrapper>
      <AuthCard>
        <StyledLogo />
        <Form onSubmit={handleSubmit(handleLogin)}>
          <StyledInput type="text" placeholder="Login" {...register('login', { required: true })} />
          <StyledInput type="password" placeholder="Hasło" {...register('password', { required: true })} />
          <StyledButton type="submit">Zaloguj się</StyledButton>
        </Form>
      </AuthCard>
    </Wrapper>
  );
};

export default Login;
