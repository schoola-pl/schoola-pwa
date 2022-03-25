import { GoBack, SearchLink, InnerWrapper, Logo, Wrapper, SettingsLink } from './TopBar.styles';
import SettingsIcon from 'assets/icons/SettingsIcon.png';
import { Link, useNavigate } from 'react-router-dom';
import NotificationList from 'components/organisms/NotificationList/NotificationList';
import BackIcon from 'assets/icons/UserSidebarIcons/BackIcon.svg';
import SearchIcon from 'assets/icons/SearchIcon.svg';

const TopBar = () => {
  const url = window.location.pathname;
  const isComments = url.includes('/comments') || url.includes('/search');
  const isSettings = url.includes('/profile');
  const isSocialView = url.includes('/feed') || url.includes('/spotted');
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Logo as={Link} to="/student/feed">
        schoola
      </Logo>
      <InnerWrapper>
        <GoBack icon={BackIcon} isComments={isComments} onClick={() => navigate(-1)} />
        <SearchLink icon={SearchIcon} as={Link} to="/student/search" isSocialView={isSocialView} />
        <NotificationList />
        <SettingsLink isSettings={isSettings} style={{ margin: 0 }} as={Link} to="/student/settings" icon={SettingsIcon} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default TopBar;
