import React, { useState } from 'react';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import NotificationIcon from 'assets/icons/NotificationIcon.svg';
import styled from 'styled-components';
import NotificationAction from 'components/molecules/NotificationAction/NotificationAction';

interface Props {
  isOpen: boolean;
}

const StyledSidebarLink = styled(SidebarLink)`
  margin: 1rem;
  padding: 2rem;
`;

interface accountType {
  accountType: string;
}

const Wrapper = styled.div<accountType>`
  display: ${({ accountType }) => (accountType === 'spottedAdmin' ? 'block' : 'none')};
`;

const NotificationButton = styled(StyledSidebarLink)`
  transform: translateX(25%);
`;
const NotificationWrapper = styled.div<Props>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: absolute;
  flex-direction: column;
  border-radius: 2rem;
  align-items: center;
  top: 85%;
  left: 25%;
  width: 30rem;
  height: 50rem;
  background-color: white;
  z-index: 999999;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  overflow-y: scroll;
`;

const Heading = styled.h1`
  width: 100%;
  padding-left: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.selectedItemGrey};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-bottom: 5rem;
`;

const NotificationList: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const handleOpenMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <Wrapper accountType="spottedAdmin">
      <NotificationButton onClick={handleOpenMenu} icon={NotificationIcon} />
      <NotificationWrapper isOpen={isOpen}>
        <Heading>Powiadomienia</Heading>
        <NotificationAction />
      </NotificationWrapper>
    </Wrapper>
  );
};

export default NotificationList;
