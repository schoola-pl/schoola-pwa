import { GoBack, SearchLink, InnerWrapper, Logo, Wrapper, SettingsLink, EditLink } from './TopBar.styles';
import SettingsIcon from 'assets/icons/SettingsIcon.png';
import { Link, useNavigate } from 'react-router-dom';
import NotificationList from 'components/organisms/NotificationList/NotificationList';
import BackIcon from 'assets/icons/UserSidebarIcons/BackIcon.svg';
import SearchIcon from 'assets/icons/SearchIcon.svg';
import BlackEditIcon from 'assets/icons/BlackEditIcon.svg';

const TopBar = () => {
  const url = window.location.pathname;
  const isComments = url.includes('/comments') || url.includes('/search') || url.includes('/settings') || url.includes('/profiles');
  const isProfile = url.includes('/profile/me');
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Logo data-testid="logo" as={Link} to="/student/feed">
        schoola
      </Logo>
      <InnerWrapper isProfile={isProfile}>
        <GoBack icon={BackIcon} isComments={isComments} onClick={() => navigate(-1)} />
        <SearchLink icon={SearchIcon} as={Link} to="/student/search" isProfile={isProfile} isComments={isComments} />
        <EditLink icon={BlackEditIcon} as={Link} to="/student/profile/edit" isProfile={isProfile} />
        <NotificationList />
        <SettingsLink isProfile={isProfile} style={{ margin: 0 }} data-testid="settings" as={Link} to="/student/settings" icon={SettingsIcon} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default TopBar;
