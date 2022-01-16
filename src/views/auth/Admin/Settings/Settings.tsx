import AdminTemplate from 'components/templates/AdminTemplate/AdminTemplate';
import ChangePassword from 'views/auth/Forms/ChangePassword/ChangePassword';
import EditProfile from 'views/auth/Forms/EditProfile/EditProfile';
import { Wrapper, Heading, CardWrapper } from './Settings.styles';

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
