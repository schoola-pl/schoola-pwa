import { LogoutButton, PageWrapper } from './SecuritySettings.styles';
import ChangePassword from 'views/User/Settings/SecuritySettings/ChangePassword/ChangePassword';
import ChangeEmail from 'views/User/Settings/SecuritySettings/ChangeEmail/ChangeEmail';
import { useUser } from 'hooks/useUser';

const SecuritySettings = () => {
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
export default SecuritySettings;
