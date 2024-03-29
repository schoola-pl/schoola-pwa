import styled from 'styled-components';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

interface Props {
  isOpen: boolean;
}

interface accountType {
  accountType: string;
}

export const Wrapper = styled.div<accountType>`
  display: ${({ accountType }) => (accountType === 'spottedAdmin' ? 'block' : 'none')};
`;

export const NotificationButton = styled(SidebarLink)`
  margin: 0;
`;

export const NotificationButtonWrapper = styled.div<{ isVisible: boolean; notificationCounter: number }>`
  position: relative;

  &::before {
    content: ${({ notificationCounter }) => (notificationCounter > 0 ? `"${notificationCounter}"` : '')};
    display: ${({ notificationCounter }) => (notificationCounter > 0 ? `1` : '0')};
    position: absolute;
    top: 0.7rem;
    right: 1rem;
    border-radius: 2rem;
    height: 1.5rem;
    width: 1.5rem;
    background-color: ${({ theme }) => theme.colors.accentRed};
    color: white;
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
  }
`;

export const NotificationWrapper = styled.div<Props>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: absolute;
  flex-direction: column;
  border-radius: 2rem;
  align-items: center;
  top: 85%;
  left: calc(100% - 31rem);
  width: 30rem;
  height: 50rem;
  background-color: white;
  z-index: 999999;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  overflow-y: scroll;
`;

export const Heading = styled.h1`
  width: 100%;
  padding-left: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.selectedItemGrey};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-bottom: 5rem;
`;
