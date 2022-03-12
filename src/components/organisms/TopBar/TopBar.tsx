import { GoBack, InnerWrapper, Logo, Wrapper } from './TopBar.styles';
import SettingsIcon from 'assets/icons/SettingsIcon.png';
import { Link, useNavigate } from 'react-router-dom';
import NotificationList from 'components/organisms/NotificationList/NotificationList';
import BackIcon from 'assets/icons/UserSidebarIcons/BackIcon.svg';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

const TopBar = () => {
  const url = window.location.pathname;
  const isComments = url.includes('/comments');
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Logo as={Link} to="/student/feed">
        schoola
      </Logo>
      <InnerWrapper>
        <GoBack icon={BackIcon} isComments={isComments} onClick={() => navigate(-1)} />
        <NotificationList />
        <SidebarLink style={{ margin: 0 }} as={Link} to="profile/settings" icon={SettingsIcon} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default TopBar;
