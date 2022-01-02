import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SidebarLink from 'components/molecules/SidebarLink/SidebarLink';
import AddUserIcon from 'assets/icons/AddUserIcon.png';
import DashboardIcon from 'assets/icons/DashboardIcon.png';
import SettingsIcon from 'assets/icons/SettingsIcon.png';
import LogoutIcon from 'assets/icons/LogoutIcon.png';
import routes from 'routes';

const Logo = styled.h1`
  margin-top: 6.5rem;
  font-size: ${({ theme }) => theme.fontSize.xl};

  &::after {
    content: '.';
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.accentGreen};
  }
`;

const Wrapper = styled.nav`
  position: fixed;
  height: 100vh;
  width: 22.5rem;
  padding: 0;
  left: 0;
  top: 0;
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightBrown};
  border-right: 5px solid ${({ theme }) => theme.colors.accentGreen};
  flex-direction: column;
  align-items: center;
`;

const StyledList = styled.ul`
  margin: 2.5rem 0 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  left: 0;
`;

const StyledListItem = styled.li`
  display: flex;
  height: 8rem;
  width: 20rem;
  align-items: center;
  text-decoration: none;
  margin-top: 2rem;
  color: black;
  border-radius: 2rem;
  position: relative;
  left: 0;
  transition: all 0.3s;

  &:last-child {
    margin-top: 20rem;
  }

  &:hover {
    background-color: white;
  }
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const AdminSidebar = () => (
  <Wrapper>
    <Logo>schoola</Logo>
    <StyledList>
      <StyledListItem as={Link} to="">
        <SidebarLink icon={AddUserIcon} />
        <StyledParagraph>Zarządzaj użytkownikami</StyledParagraph>
      </StyledListItem>
      <StyledListItem as={Link} to="">
        <SidebarLink icon={DashboardIcon} />
        <StyledParagraph>Tablica</StyledParagraph>
      </StyledListItem>
      <StyledListItem as={Link} to="">
        <SidebarLink icon={SettingsIcon} />
        <StyledParagraph>Ustawienia</StyledParagraph>
      </StyledListItem>
      <StyledListItem as={Link} to="">
        <SidebarLink icon={LogoutIcon} />
        <StyledParagraph>Wyloguj się</StyledParagraph>
      </StyledListItem>
    </StyledList>
  </Wrapper>
);

export default AdminSidebar;
