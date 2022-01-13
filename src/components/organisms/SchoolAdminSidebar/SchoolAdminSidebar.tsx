import { Logo, StyledList, StyledListItem, StyledParagraph, Wrapper } from './SchoolAdminSidebar.styles';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import AddUserIcon from 'assets/icons/AddUserIcon.png';
import DashboardIcon from 'assets/icons/DashboardIcon.png';
import SettingsIcon from 'assets/icons/SettingsIcon.png';
import LogoutIcon from 'assets/icons/LogoutIcon.png';
import React from 'react';

const links: { path: string; name: string; icon: string; isDanger?: boolean }[] = [
  { path: '/school-admin/', icon: DashboardIcon, name: 'Tablica' },
  { path: '/school-admin/manage', icon: AddUserIcon, name: 'Zarządzaj użytkownikami' },
  { path: '/school-admin/settings', icon: SettingsIcon, name: 'Ustawienia' },
  { path: '/login', icon: LogoutIcon, name: 'Wyloguj się', isDanger: true }
];

const AdminSidebar = () => (
  <Wrapper>
    <Logo>schoola</Logo>
    <StyledList>
      {links.map(({ path, name, icon, isDanger }) => (
        <StyledListItem key={path} to={path} isDanger={isDanger}>
          <SidebarLink tabIndex={-1} icon={icon} />
          <StyledParagraph>{name}</StyledParagraph>
        </StyledListItem>
      ))}
    </StyledList>
  </Wrapper>
);

export default React.memo(AdminSidebar);
