import { PageWrapper, LogoutButton } from './Settings.styles';
import ChangePassword from 'views/User/Settings/ChangePassword/ChangePassword';
import ChangeEmail from 'views/User/Settings/ChangeEmail/ChangeEmail';
import { useUser } from 'hooks/useUser';

const Settings = () => {
  const { logout } = useUser();
  return (
    <PageWrapper>
      <ChangeEmail />
      <ChangePassword />
      <a href="mailto:schoolacontact@gmail.com">Zgłoś problem</a>
      <LogoutButton onClick={logout}>Wyloguj się</LogoutButton>
    </PageWrapper>
  );
};
export default Settings;
