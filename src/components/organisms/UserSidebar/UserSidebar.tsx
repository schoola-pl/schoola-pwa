import styled from 'styled-components';
import SpottedIcon from 'assets/IconComponents/SpottedIcon';
import AppointmentIcon from 'assets/IconComponents/AppointmentIcon';
import FeedIcon from 'assets/IconComponents/FeedIcon';
import HomeIcon from 'assets/IconComponents/HomeIcon';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  border-radius: 3rem;
  width: 95%;
  height: 9rem;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  left: 2.6%;
  bottom: 2.5%;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

interface Props {
  name?: string;
}

const StyledListItem = styled(NavLink)<Props>`
  display: flex;
  align-items: center;
  text-decoration: none;

  &.active {
    &::after {
      content: '${({ name }) => name}';
      color: white;
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

const links: { path: string; name: string; icon?: string | any }[] = [
  { path: '/appointment', icon: AppointmentIcon, name: 'Wizyta' },
  { path: '/spotted', icon: SpottedIcon, name: 'Spotted' },
  { path: '/feed', icon: FeedIcon, name: 'Tablica' },
  { path: '/home', icon: HomeIcon, name: 'Home' }
];

const UserSidebar = () => (
  <Wrapper>
    <StyledList key="">
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

export default UserSidebar;
