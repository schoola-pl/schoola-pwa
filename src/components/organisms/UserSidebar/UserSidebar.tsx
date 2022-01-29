import { Wrapper, StyledListItem, StyledList } from './UserSidebar.styles';
import SpottedIcon from 'assets/IconComponents/SpottedIcon';
import AppointmentIcon from 'assets/IconComponents/AppointmentIcon';
import FeedIcon from 'assets/IconComponents/FeedIcon';
import HomeIcon from 'assets/IconComponents/HomeIcon';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

const links: { path: string; name: string; icon?: string | any }[] = [
  { path: '/appointment', icon: AppointmentIcon, name: 'Wizyta' },
  { path: '/spotted', icon: SpottedIcon, name: 'Spotted' },
  { path: '/feed', icon: FeedIcon, name: 'Tablica' },
  { path: '/home', icon: HomeIcon, name: 'Home' }
];

const UserSidebar = () => {
  return (
    <Wrapper>
      <StyledList key="808879786">
        <StyledListItem name="Wizyta" to="/appointment">
          <SidebarLink>
            <AppointmentIcon />
          </SidebarLink>
        </StyledListItem>
        <StyledListItem name="Spotted" to="/spotted">
          <SidebarLink>
            <SpottedIcon />
          </SidebarLink>
        </StyledListItem>
        <StyledListItem name="Tablica" to="/feed">
          <SidebarLink>
            <FeedIcon />
          </SidebarLink>
        </StyledListItem>
        <StyledListItem name="Home" to="/home">
          <SidebarLink>
            <HomeIcon />
          </SidebarLink>
        </StyledListItem>
      </StyledList>
    </Wrapper>
  );
};

export default UserSidebar;
