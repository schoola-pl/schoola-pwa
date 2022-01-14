import { Logo, StyledList, StyledListItem, StyledParagraph, Wrapper } from './SchoolAdminSidebar.styles';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import AddUserIcon from 'assets/icons/AddUserIcon.png';
import DashboardIcon from 'assets/icons/DashboardIcon.png';
import SettingsIcon from 'assets/icons/SettingsIcon.png';
import LogoutIcon from 'assets/icons/LogoutIcon.png';
import React from 'react';
import { useUser } from '../../../hooks/useUser';

const links: { path: string; name: string; icon: string }[] = [
  { path: '/school-admin/', icon: DashboardIcon, name: 'Tablica' },
  { path: '/school-admin/manage', icon: AddUserIcon, name: 'Zarządzaj użytkownikami' },
  { path: '/school-admin/settings', icon: SettingsIcon, name: 'Ustawienia' }
];

const AdminSidebar = () => {
  const { logout } = useUser();

  return (
    <Wrapper>
      <Logo>schoola</Logo>
      <StyledList>
        {links.map(({ path, name, icon }) => (
          <StyledListItem key={path} to={path}>
            <SidebarLink tabIndex={-1} icon={icon} />
            <StyledParagraph>{name}</StyledParagraph>
          </StyledListItem>
        ))}
        <StyledListItem key={'logout'} onClick={logout} to={'/'} isDanger>
          <SidebarLink tabIndex={-1} icon={LogoutIcon} />
          <StyledParagraph>Wyloguj się</StyledParagraph>
        </StyledListItem>
      </StyledList>
    </Wrapper>
  );
};

export default React.memo(AdminSidebar);
