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
  width: 37rem;
  height: 9rem;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  left: 3%;
  bottom: 2.5%;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
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

    p {
      font-size: ${({ theme }) => theme.fontSize.s};
      color: white;
    }
  }
`;

// const StyledListItem = styled(NavLink)``;

// const links: { path: string; name: string; icon: string }[] = [
//   { path: '/appointment', icon: '', name: '' },
//   { path: '/spotted', icon: '', name: '' },
//   { path: '/feed', icon: '', name: '' },
//   { path: '/profile', icon: '', name: '' }
// ];
// {links.map(({ path, name, icon }) => (
//   <StyledList key={path}>
//     <StyledListItem as={NavLink} to={path}>
//       <SidebarLink icon={icon} />
//     </StyledListItem>
//   </StyledList>
// ))}

const UserSidebar = () => (
  <Wrapper>
    <StyledList>
      <li>
        <SidebarLink icon={AppointmentIcon} />
      </li>
      <li>
        <SidebarLink icon={SpottedIcon} />
      </li>
      <li>
        <SidebarLink icon={FeedIcon} />
      </li>
      <li>
        <SidebarLink icon={HomeIcon} />
        <p>Home</p>
      </li>
    </StyledList>
  </Wrapper>
);

export default UserSidebar;
