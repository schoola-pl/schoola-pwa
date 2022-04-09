import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, StyledList, StyledListItem, StyledParagraph, Wrapper } from './SchoolAdminSidebar.styles';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import AddUserIcon from 'assets/icons/AddUserIcon.png';
import DashboardIcon from 'assets/icons/DashboardIcon.png';
import SettingsIcon from 'assets/icons/SettingsIcon.png';
import LogoutIcon from 'assets/icons/LogoutIcon.png';
import { useAuth } from '../../../hooks/useAuth';

const links: { path: string; name: string; icon: string }[] = [
  { path: '/school-admin/', icon: DashboardIcon, name: 'Tablica' },
  { path: '/school-admin/manage/classes', icon: AddUserIcon, name: 'Zarządzaj użytkownikami' },
  { path: '/school-admin/settings', icon: SettingsIcon, name: 'Twoje konto' }
];

const AdminSidebar = () => {
  const { signOut } = useAuth();

  return (
    <Wrapper>
      <Logo as={Link} to="/school-admin/">
        schoola
      </Logo>
      <StyledList>
        <div>
          {links.map(({ path, name, icon }) => (
            <StyledListItem key={path} to={path}>
              <SidebarLink tabIndex={-1} icon={icon} />
              <StyledParagraph>{name}</StyledParagraph>
            </StyledListItem>
          ))}
        </div>
        <div>
          <StyledListItem as="div" key={'logout'} onClick={() => signOut({})} isDanger>
            <SidebarLink tabIndex={-1} icon={LogoutIcon} />
            <StyledParagraph>Wyloguj się</StyledParagraph>
          </StyledListItem>
        </div>
      </StyledList>
    </Wrapper>
  );
};

export default React.memo(AdminSidebar);
