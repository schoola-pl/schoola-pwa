import { PageWrapper } from './Settings.styles';
import ChangePassword from 'views/User/Settings/ChangePassword/ChangePassword';
import ChangeEmail from 'views/User/Settings/ChangeEmail/ChangeEmail';

const Settings = () => {
  return (
    <PageWrapper>
      <ChangeEmail />
      <ChangePassword />
      <a href="mailto:schoolacontact@gmail.com">Zgłoś problem</a>
    </PageWrapper>
  );
};
export default Settings;
