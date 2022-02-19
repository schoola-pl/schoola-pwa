import { InnerWrapper, Logo, StyledSidebarLink, UserPicture, Wrapper } from './TopBar.styles';
import NotificationList from 'components/organisms/NotificationList/NotificationList';
import SettingsIcon from 'assets/icons/SettingsIcon.png';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <Wrapper>
      <Logo>schoola</Logo>
      <InnerWrapper>
        <NotificationList />
        <StyledSidebarLink as={Link} to="profile/settings" icon={SettingsIcon} />
        <UserPicture to="/profile" />
      </InnerWrapper>
    </Wrapper>
  );
};

export default TopBar;
