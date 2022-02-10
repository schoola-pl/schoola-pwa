import styled from 'styled-components';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import { Link } from 'react-router-dom';

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};

  &::after {
    content: '.';
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.accentGreen};
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  z-index: 999999;
  background-color: ${({ theme }) => theme.colors.accentBrown};
  box-shadow: 0px 2px 10px -2px rgba(0, 0, 0, 0.2);
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

export const UserPicture = styled(Link)<Props>`
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

export const InnerWrapper = styled.div`
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSidebarLink = styled(SidebarLink)`
  margin: 1rem;
  padding: 2rem;
`;
