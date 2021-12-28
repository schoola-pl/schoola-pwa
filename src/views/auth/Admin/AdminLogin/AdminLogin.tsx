import { useState } from 'react';
import styled from 'styled-components';
import { Wrapper, StyledLogo, Form } from './AdminLogin.styles';

const AuthCard = styled.div`
  width: 400px;
  height: 450px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
padding: 1.5rem 3.5rem;
border: none;
box-sizing: border-box;
box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
border-radius: 5rem;
font-size: ${({ theme }) => theme.fontSize.s};
text-transform: capitalize;
resize: none;
margin-bottom: 3rem;
&:focus {
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.accentGreen};
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  padding: 0;
  background: ${({ theme }) => theme.colors.accentGreen};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    background-color: #33aa45;
    cursor: pointer;
  }
`;

const initialState = {
  username: '',
  password: ''
};

const AdminLogin: React.FC = () => {
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
          <Input type="text" onChange={handleChange} placeholder="admin" name="username" />
          <Input type="password" onChange={handleChange} placeholder="hasło" name="password" />
          <Button type="submit">login</Button>
        </Form>
      </AuthCard>
    </Wrapper>
  );
};

export default AdminLogin;
