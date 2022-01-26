import styled from 'styled-components';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import SettingsIcon from 'assets/icons/SettingsIcon.png';

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
  top: 0;
  width: 100vw;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: px solid ${({ theme }) => theme.colors.selectedItemBorderGrey};
`;

type Props = {
  icon?: string;
};

const UserPicture = styled.div<Props>`
  background-color: white;
  border-radius: 25rem;
  height: 6rem;
  width: 6rem;
  background-image: url(https://avatars.dicebear.com/api/miniavs/:teodor-wolski.svg);
  border: 3px solid ${({ theme }) => theme.colors.accentBlue};
  background-repeat: no-repeat;
  background-color: white;
  background-size: 100%;
  background-position: center;
`;

const InnerWrapper = styled.div`
  margin-left: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopBar = () => (
  <Wrapper>
    <Logo>schoola</Logo>
    <InnerWrapper>
      <SidebarLink icon={SettingsIcon} />
      <UserPicture />
    </InnerWrapper>
  </Wrapper>
);

export default TopBar;
