import { BoxWrapper, CancelBox, EditBox, Form, InfoWrapper, NotificationContentWrapper } from './NotificationAction.styles';
import AcceptIcon from 'assets/icons/AcceptIcon.png';
import CancelIcon from 'assets/icons/CancelIcon.png';
import { useSelector } from 'react-redux';
import { storeRoot, useGetProposalsQuery } from 'store';
import { useSpotted } from 'hooks/useSpotted';

const NotificationAction = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const proposals = useGetProposalsQuery({
    schoolId: user?.schoolId || null
  });
  const { approveSpott, disapproveSpott } = useSpotted();

  return (
    <Form>
      <NotificationContentWrapper>
        {proposals.isLoading ? (
          <p style={{ margin: 0, paddingBlock: '2rem', paddingRight: 0, textAlign: 'center' }}>Wczytuje powiadomienia...</p>
        ) : (proposals.data?.data && proposals.data?.data?.length <= 0) || proposals.isError ? (
          <p style={{ margin: 0, paddingBlock: '2rem', paddingRight: 0, textAlign: 'center' }}>Nie tutaj narazie żadnych powiadomień!</p>
        ) : null}
        {user?.TextRole === 'Moderator' && proposals.data?.data && proposals.data?.data?.length > 0
          ? proposals.data.data.map(({ id, attributes: { message } }) => (
              <div key={id}>
                <InfoWrapper>
                  <h1>Pytanie:</h1>
                  <BoxWrapper>
                    <EditBox icon={AcceptIcon} onClick={() => approveSpott(id, message)} />
                    <CancelBox icon={CancelIcon} onClick={() => disapproveSpott(id)} />
                  </BoxWrapper>
                </InfoWrapper>
                <p>{message}</p>
              </div>
            ))
          : null}
      </NotificationContentWrapper>
    </Form>
  );
};

export default NotificationAction;
