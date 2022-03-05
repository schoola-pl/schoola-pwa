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
  margin-left: 1.8rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const InnerWrapper = styled.div`
  margin-right: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// export const StyledSidebarLink = styled(SidebarLink)``;

export const GoBack = styled(SidebarLink)<{ isComments?: boolean }>`
  transform: translateX(50%);
  display: ${({ isComments }) => (isComments ? 'flex' : 'none')};
`;
