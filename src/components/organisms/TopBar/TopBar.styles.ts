import styled from 'styled-components';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-decoration: none;
  color: black;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 1rem;
`;

export const StyledInput = styled.input<{ isVisible?: boolean }>`
  position: absolute;
  border: none;
  padding: 1rem;
  max-width: 18rem;
  border-radius: 2rem;
  top: 75%;
  right: 30%;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
`;

export const SettingsLink = styled(SidebarLink)<{ isSettings?: boolean }>`
  display: ${({ isSettings }) => (isSettings ? 'block' : 'none')};
`;

export const SearchLink = styled(SidebarLink)<{ isSocialView?: boolean }>`
  display: ${({ isSocialView }) => (isSocialView ? 'block' : 'none')};
`;

// export const UserPicture = styled.div`
//   border-radius: 50%;
//   width: 5rem;
//   height: 5rem;
//   position: relative;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   img {
//     min-width: 100%;
//     min-height: 100%;
//   }
// `;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 6rem;
`;

export const GoBack = styled(SidebarLink)<{ isComments?: boolean }>`
  display: ${({ isComments }) => (isComments ? 'flex' : 'none')};
  margin: 0;
`;
