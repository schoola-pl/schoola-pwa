import { Form, NotificationContentWrapper, InfoWrapper, BoxWrapper, EditBox, CancelBox } from './NotificationAction.styles';
import AcceptIcon from 'assets/icons/AcceptIcon.png';
import CancelIcon from 'assets/icons/CancelIcon.png';

const NotificationAction = () => {
  return (
    <Form>
      <NotificationContentWrapper>
        <InfoWrapper>
          <h1>Pytanie:</h1>
          <BoxWrapper>
            <EditBox icon={AcceptIcon} />
            <CancelBox icon={CancelIcon} />
          </BoxWrapper>
        </InfoWrapper>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dolore ipsum, sin?</p>
      </NotificationContentWrapper>
    </Form>
  );
};

export default NotificationAction;
