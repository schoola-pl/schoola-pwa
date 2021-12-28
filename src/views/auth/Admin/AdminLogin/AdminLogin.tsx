import { useState } from 'react';
import { Wrapper, StyledLogo, Form } from './AdminLogin.styles';
import AuthCard from 'components/molecules/AuthCard/AuthCard';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

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
