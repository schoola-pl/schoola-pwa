import { GoBack, InnerWrapper, Logo, SearchLink, SettingsLink, Wrapper } from './TopBar.styles';
import SettingsIcon from 'assets/icons/SettingsIcon.png';
import { Link, useNavigate } from 'react-router-dom';
import NotificationList from 'components/organisms/NotificationList/NotificationList';
import BackIcon from 'assets/icons/UserSidebarIcons/BackIcon.svg';
import SearchIcon from 'assets/icons/SearchIcon.svg';

const TopBar = () => {
  const url = window.location.pathname;
  const isComments =
    url.includes('/comments') || url.includes('/search') || url.includes('/settings') || url.includes('/profiles') || url.includes('/edit');
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
        <NotificationList />
        <SettingsLink
          isProfile={isProfile}
          style={{ margin: 0 }}
          data-testid="settings"
          as={Link}
          to="/student/profile/settings"
          icon={SettingsIcon}
        />
      </InnerWrapper>
    </Wrapper>
  );
};

export default TopBar;
