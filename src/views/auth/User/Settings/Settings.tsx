import { PageWrapper, LogoutButton } from './Settings.styles';
import ChangePassword from 'views/auth/User/Settings/ChangePassword/ChangePassword';
import ChangeEmail from 'views/auth/User/Settings/ChangeEmail/ChangeEmail';
import { useUser } from 'hooks/useUser';

const Settings = () => {
  const { logout } = useUser();
  return (
    <PageWrapper>
      <ChangePassword />
      <ChangeEmail />
      <a href="mailto:schoolacontact@gmail.com">Zgłoś problem</a>
      <LogoutButton onClick={logout}>Wyloguj się</LogoutButton>
    </PageWrapper>
  );
};
export default Settings;
