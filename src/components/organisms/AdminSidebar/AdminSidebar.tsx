import { Logo, StyledList, Wrapper, StyledListItem, StyledParagraph } from './AdminSidebar.styles';
import { Link } from 'react-router-dom';
import SidebarLink from 'components/molecules/SidebarLink/SidebarLink';
import AddUserIcon from 'assets/icons/AddUserIcon.png';
import DashboardIcon from 'assets/icons/DashboardIcon.png';
import SettingsIcon from 'assets/icons/SettingsIcon.png';
import LogoutIcon from 'assets/icons/LogoutIcon.png';

const AdminSidebar = () => (
  <Wrapper>
    <Logo>schoola</Logo>
    <StyledList>
      <StyledListItem as={Link} to="/school-admin/dashboard">
        <SidebarLink icon={DashboardIcon} />
        <StyledParagraph>Tablica</StyledParagraph>
      </StyledListItem>
      <StyledListItem as={Link} to="/school-admin/manage-classes">
        <SidebarLink icon={AddUserIcon} />
        <StyledParagraph>Zarządzaj użytkownikami</StyledParagraph>
      </StyledListItem>
      <StyledListItem as={Link} to="">
        <SidebarLink icon={SettingsIcon} />
        <StyledParagraph>Ustawienia</StyledParagraph>
      </StyledListItem>
      <StyledListItem as={Link} to="/login">
        <SidebarLink icon={LogoutIcon} />
        <StyledParagraph>Wyloguj się</StyledParagraph>
      </StyledListItem>
    </StyledList>
  </Wrapper>
);

export default AdminSidebar;
