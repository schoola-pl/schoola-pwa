import { Wrapper, Logo, InnerWrapper } from './PsychoTopBar.styles';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import NotificationsIcon from 'assets/icons/NotificationIcon.svg';
import SettingsIcon from 'assets/icons/SettingsIcon.png';

const PsychoTopBar = () => (
  <Wrapper>
    <Logo>schoola</Logo>
    <InnerWrapper>
      <SidebarLink icon={NotificationsIcon} />
      <SidebarLink icon={SettingsIcon} />
    </InnerWrapper>
  </Wrapper>
);

export default PsychoTopBar;
