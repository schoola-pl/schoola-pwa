import React, { useState } from 'react';
import { Wrapper, NotificationButton, NotificationWrapper, Heading, NotificationButtonWrapper } from './Notification.styles';
import NotificationIcon from 'assets/icons/NotificationIcon.svg';
import NotificationAction from 'components/molecules/NotificationAction/NotificationAction';
import { storeRoot, useGetSpottedProposalsQuery } from 'store';
import { useSelector } from 'react-redux';

const NotificationList: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const user = useSelector((state: storeRoot) => state.user);
  const [isVisible, setVisibility] = useState(true);
  const proposals = useGetSpottedProposalsQuery({
    schoolId: user?.schoolId || null
  });

  const handleOpenMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <Wrapper accountType="spottedAdmin">
      <NotificationButtonWrapper isVisible={isVisible}>
        {/* {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          proposals.data?.data?.length > 0 ? <div>{proposals.data?.data?.length}</div> : setVisibility(false)
        } */}
        <NotificationButton onClick={handleOpenMenu} icon={NotificationIcon} />
      </NotificationButtonWrapper>
      <NotificationWrapper isOpen={isOpen}>
        <Heading>Powiadomienia</Heading>
        <NotificationAction />
      </NotificationWrapper>
    </Wrapper>
  );
};

export default NotificationList;
