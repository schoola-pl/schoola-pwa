import { PageWrapper } from './Settings.styles';
import ChangePassword from 'views/auth/User/Settings/ChangePassword/ChangePassword';
import ChangeEmail from 'views/auth/User/Settings/ChangeEmail/ChangeEmail';

const Settings = () => {
  return (
    <PageWrapper>
      <ChangePassword />
      <ChangeEmail />
      <a href="mailto:schoolacontact@gmail.com">Zgłoś problem</a>
    </PageWrapper>
  );
};
export default Settings;
