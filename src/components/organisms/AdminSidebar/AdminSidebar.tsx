import { Logo, StyledList, StyledListItem, StyledParagraph, Wrapper } from './AdminSidebar.styles';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import AddUserIcon from 'assets/icons/AddUserIcon.png';
import DashboardIcon from 'assets/icons/DashboardIcon.png';
import SettingsIcon from 'assets/icons/SettingsIcon.png';
import LogoutIcon from 'assets/icons/LogoutIcon.png';
import React from 'react';

const links: { path: string; name: string; icon: string }[] = [
  { path: '/dashboard', icon: DashboardIcon, name: 'Tablica' },
  { path: '/manage', icon: AddUserIcon, name: 'Zarządzaj użytkownikami' },
  { path: '/settings', icon: SettingsIcon, name: 'Ustawienia' },
  { path: '/login', icon: LogoutIcon, name: 'Wyloguj się' }
];

const AdminSidebar = () => (
  <Wrapper>
    <Logo>schoola</Logo>
    <StyledList>
      {links.map(({ path, name, icon }) => (
        <StyledListItem key={path} to={path}>
          <SidebarLink tabIndex={-1} icon={icon} />
          <StyledParagraph>{name}</StyledParagraph>
        </StyledListItem>
      ))}
    </StyledList>
  </Wrapper>
);

export default React.memo(AdminSidebar);