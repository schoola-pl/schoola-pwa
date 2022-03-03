import { PageWrapper } from './Settings.styles';
import ChangePassword from 'views/auth/User/Settings/ChangePassword/ChangePassword';
import ChangeEmail from 'views/auth/User/Settings/ChangeEmail/ChangeEmail';

const Settings = () => {
  return (
    <PageWrapper>
      <ChangePassword />
      <ChangeEmail />
    </PageWrapper>
  );
};
export default Settings;
