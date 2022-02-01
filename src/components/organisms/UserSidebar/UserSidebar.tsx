import { StyledSidebarLink, Wrapper, StyledListItem, StyledList } from './UserSidebar.styles';
import UserIcon from 'assets/icons/UserSidebarIcons/UserIcon.svg';
import AppointmentIcon from 'assets/icons/UserSidebarIcons/AppointmentIcon.svg';
import SpottedIcon from 'assets/icons/UserSidebarIcons/SpottedIcon.svg';
import FeedIcon from 'assets/icons/UserSidebarIcons/FeedIcon.svg';

const UserSidebar = () => {
  return (
    <Wrapper>
      <StyledList key="808879786">
        <StyledListItem name="Profil" to="/profile">
          <StyledSidebarLink icon={UserIcon} />
        </StyledListItem>
        <StyledListItem name="Wizyta" to="/appointment">
          <StyledSidebarLink icon={AppointmentIcon} />
        </StyledListItem>
        <StyledListItem name="Spotted" to="/spotted">
          <StyledSidebarLink icon={SpottedIcon} />
        </StyledListItem>
        <StyledListItem name="Feed" to="/feed">
          <StyledSidebarLink icon={FeedIcon} />
        </StyledListItem>
      </StyledList>
    </Wrapper>
  );
};

export default UserSidebar;
