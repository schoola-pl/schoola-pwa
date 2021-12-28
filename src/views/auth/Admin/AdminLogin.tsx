import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthCard = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AdminLogin: React.FC = () => (
  <Wrapper>
    <AuthCard>
      <Logo />
    </AuthCard>
  </Wrapper>
);

export default AdminLogin;
