import styled from 'styled-components';
import UserIcon from 'assets/icons/UserIcon.png';
import AppointmentIcon from 'assets/icons/AppointmentIcon.png';
import FeedIcon from 'assets/icons/FeedIcon.png';
import SpottedIcon from 'assets/icons/SpottedIcon.png';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  border-radius: 3rem;
  width: 36rem;
  height: 9rem;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  left: 4%;
  bottom: 2.5%;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
`;

const StyledListItem = styled(NavLink)``;

const links: { path: string; name: string; icon: string }[] = [
  { path: '/appointment', icon: AppointmentIcon, name: '' },
  { path: '/spotted', icon: SpottedIcon, name: '' },
  { path: '/feed', icon: FeedIcon, name: '' },
  { path: '/profile', icon: UserIcon, name: '' }
];

const UserSidebar = () => (
  <Wrapper>
    {links.map(({ path, name, icon }) => (
      <StyledList key={path}>
        <StyledListItem as={NavLink} to={path}>
          <SidebarLink icon={icon} />
        </StyledListItem>
      </StyledList>
    ))}
  </Wrapper>
);

export default UserSidebar;
