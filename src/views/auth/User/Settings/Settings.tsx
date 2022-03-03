import styled from 'styled-components';
import { PageWrapper } from './Settings.styles';
import ChangePassword from 'views/auth/User/Settings/ChangePassword/ChangePassword';

const Settings = () => {
  return (
    <PageWrapper>
      <ChangePassword />
    </PageWrapper>
  );
};
export default Settings;
