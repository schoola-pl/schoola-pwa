import styled from 'styled-components';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

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
  background-color: ${({ theme }) => theme.colors.lightBrown};
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const UserPicture = styled.div`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    min-width: 100%;
    min-height: 100%;
  }
`;

export const InnerWrapper = styled.div`
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// export const StyledSidebarLink = styled(SidebarLink)``;

export const GoBack = styled(SidebarLink)<{ isComments?: boolean }>`
  transform: translateX(50%);
  display: ${({ isComments }) => (isComments ? 'flex' : 'none')};
`;
