import { Logo, StyledList, StyledListItem, StyledParagraph, Wrapper } from './AdminSidebar.styles';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import AddUserIcon from 'assets/icons/AddUserIcon.png';
import DashboardIcon from 'assets/icons/DashboardIcon.png';
import SettingsIcon from 'assets/icons/SettingsIcon.png';
import LogoutIcon from 'assets/icons/LogoutIcon.png';

const AdminSidebar = () => (
  <Wrapper>
    <Logo>schoola</Logo>
    <StyledList>
      <StyledListItem to="/school-admin/dashboard">
        <SidebarLink icon={DashboardIcon} />
        <StyledParagraph>Tablica</StyledParagraph>
      </StyledListItem>
      <StyledListItem to="/school-admin/manage-classes">
        <SidebarLink icon={AddUserIcon} />
        <StyledParagraph>Zarządzaj użytkownikami</StyledParagraph>
      </StyledListItem>
      <StyledListItem to="">
        <SidebarLink icon={SettingsIcon} />
        <StyledParagraph>Ustawienia</StyledParagraph>
      </StyledListItem>
      <StyledListItem to="/login" isDanger>
        <SidebarLink icon={LogoutIcon} />
        <StyledParagraph>Wyloguj się</StyledParagraph>
      </StyledListItem>
    </StyledList>
  </Wrapper>
);

export default AdminSidebar;
