import { StyledListItem, StyledSidebarLink } from './UserSidebar.styles';
import UserIcon from 'assets/icons/UserSidebarIcons/UserIcon.svg';
import AppointmentIcon from 'assets/icons/UserSidebarIcons/AppointmentIcon.svg';
import SpottedIcon from 'assets/icons/UserSidebarIcons/SpottedIcon.svg';
import FeedIcon from 'assets/icons/UserSidebarIcons/FeedIcon.svg';
import Sidebar from 'components/atoms/Sidebar/Sidebar';

const UserSidebar = () => {
  return (
    <Sidebar>
      <ul>
        <StyledListItem name="Profil" to="/student/profile">
          <StyledSidebarLink icon={UserIcon} />
        </StyledListItem>
        <StyledListItem name="Wizyta" to="/student/appointment">
          <StyledSidebarLink icon={AppointmentIcon} />
        </StyledListItem>
        <StyledListItem name="Spotted" to="/student/spotted">
          <StyledSidebarLink icon={SpottedIcon} />
        </StyledListItem>
        <StyledListItem name="Feed" to="/student/feed">
          <StyledSidebarLink icon={FeedIcon} />
        </StyledListItem>
      </ul>
    </Sidebar>
  );
};

export default UserSidebar;
