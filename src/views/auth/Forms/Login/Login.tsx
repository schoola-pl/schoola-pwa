import React, { useState } from 'react';
import { Form, StyledButton, StyledInput, StyledLogo, Wrapper } from './Login.styles';
import AuthCard from 'components/molecules/AuthCard/AuthCard';

const initialState = {
  username: '',
  password: ''
};

const Login: React.FC = () => {
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <Wrapper>
      <AuthCard>
        <StyledLogo />
        <Form onSubmit={handleSubmit}>
          <StyledInput type="text" onChange={handleChange} placeholder="admin" name="username" />
          <StyledInput type="password" onChange={handleChange} placeholder="hasło" name="password" />
          <StyledButton type="submit">Zaloguj się</StyledButton>
        </Form>
      </AuthCard>
    </Wrapper>
  );
};

export default Login;
