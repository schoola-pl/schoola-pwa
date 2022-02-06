import styled from 'styled-components';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import SettingsIcon from 'assets/icons/SettingsIcon.png';
import NotificationIcon from 'assets/icons/NotificationIcon.svg';
import { Link } from 'react-router-dom';

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};

  &::after {
    content: '.';
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.accentGreen};
  }
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 999999;
  top: 0;
  width: 100vw;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

type Props = {
  icon?: string;
};

const UserPicture = styled(Link)<Props>`
  background-color: white;
  border-radius: 25rem;
  height: 5rem;
  width: 5rem;
  background-image: url(https://avatars.dicebear.com/api/miniavs/:teodor-wolski.svg);
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.19);
  background-repeat: no-repeat;
  background-color: white;
  background-size: 100%;
  background-position: center;
`;

const InnerWrapper = styled.div`
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSidebarLink = styled(SidebarLink)`
  margin: 1rem;
  padding: 2rem;
`;

const Notification = styled(StyledSidebarLink)`
  transform: translateX(25%);
`;

const TopBar = () => (
  <Wrapper>
    <Logo>schoola</Logo>
    <InnerWrapper>
      <Notification icon={NotificationIcon} />
      <StyledSidebarLink icon={SettingsIcon} />
      <UserPicture to="/profile" />
    </InnerWrapper>
  </Wrapper>
);

export default TopBar;
