import styled from 'styled-components';
import SpottedIcon from 'assets/icons/SpottedIcon.svg';
import AppointmentIcon from 'assets/icons/AppointmentIcon.svg';
import FeedIcon from 'assets/icons/FeedIcon.svg';
import HomeIcon from 'assets/icons/HomeIcon.svg';
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
  &.active {
    &::after {
      content: ${({ name }) => name};
      color: white;
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
`;

const links: { path: string; name: string; icon: string }[] = [
  { path: '/appointment', icon: AppointmentIcon, name: 'Wizyta' },
  { path: '/spotted', icon: SpottedIcon, name: 'Spotted' },
  { path: '/feed', icon: FeedIcon, name: 'Tablica' },
  { path: '/home', icon: HomeIcon, name: 'Home' }
];

const UserSidebar = () => (
  <Wrapper>
    {links.map(({ path, name, icon }) => (
      <StyledList key={path}>
        <StyledListItem name={name} to={path}>
          <SidebarLink icon={icon} />
        </StyledListItem>
      </StyledList>
    ))}
  </Wrapper>
);

export default UserSidebar;
