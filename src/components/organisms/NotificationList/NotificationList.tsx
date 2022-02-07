import React, { useState } from 'react';
import { Wrapper, NotificationButton, NotificationWrapper, Heading } from './Notification.styles';
import NotificationIcon from 'assets/icons/NotificationIcon.svg';
import NotificationAction from 'components/molecules/NotificationAction/NotificationAction';

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
