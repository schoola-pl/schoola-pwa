import ChangePassword from 'views/Forms/ChangePassword/ChangePassword';
import EditProfile from 'views/Forms/EditProfile/EditProfile';
import { CardWrapper, Heading, Wrapper } from './Settings.styles';

const Settings = () => (
  <Wrapper>
    <Heading>Ustawienia</Heading>
    <CardWrapper>
      <EditProfile />
      <ChangePassword />
    </CardWrapper>
  </Wrapper>
);

export default Settings;
