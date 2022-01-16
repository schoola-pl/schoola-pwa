import AdminTemplate from 'components/templates/AdminTemplate/AdminTemplate';
import ChangePassword from 'views/auth/Forms/ChangePassword/ChangePassword';
import EditProfile from 'views/auth/Forms/EditProfile/EditProfile';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin: 4rem 3rem 2rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #eceff7;
`;

const CardWrapper = styled.div`
  border-radius: 1rem;
  height: 65rem;
  width: 114.5rem;
  margin-left: 3rem;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  // align-items: center;
  // justify-items: center;
`;

const Settings = () => (
  <AdminTemplate>
    <Wrapper>
      <Heading>Ustawienia</Heading>
      <CardWrapper>
        <EditProfile />
        <ChangePassword />
      </CardWrapper>
    </Wrapper>
  </AdminTemplate>
);

export default Settings;
