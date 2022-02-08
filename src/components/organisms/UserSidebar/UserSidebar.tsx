import { StyledList, StyledListItem, StyledSidebarLink, Wrapper } from './UserSidebar.styles';
import UserIcon from 'assets/icons/UserSidebarIcons/UserIcon.svg';
import AppointmentIcon from 'assets/icons/UserSidebarIcons/AppointmentIcon.svg';
import SpottedIcon from 'assets/icons/UserSidebarIcons/SpottedIcon.svg';
import FeedIcon from 'assets/icons/UserSidebarIcons/FeedIcon.svg';

const UserSidebar = () => {
  return (
    <Wrapper>
      <StyledList key="808879786">
        <StyledListItem name="Profil" to="/student/home">
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
      </StyledList>
    </Wrapper>
  );
};

export default UserSidebar;
