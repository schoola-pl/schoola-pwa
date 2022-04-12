import { LogoutButton, PageWrapper } from './Settings.styles';
import ChangePassword from 'views/User/Settings/ChangePassword/ChangePassword';
import ChangeEmail from 'views/User/Settings/ChangeEmail/ChangeEmail';
import { useUser } from 'hooks/useUser';

const Settings = () => {
  const { logout } = useUser();
  return (
    <PageWrapper>
      <ChangeEmail />
      <ChangePassword />
      <LogoutButton onClick={logout}>Wyloguj się</LogoutButton>
      <a data-testid="support-link" href="mailto:schoolacontact@gmail.com">
        Zgłoś problem
      </a>
    </PageWrapper>
  );
};
export default Settings;
