import React from 'react';
import {
  BoxWrapper,
  DeleteBox,
  EditBox,
  EmailWrapper,
  InfoWrapper,
  Line,
  SecondLine,
  StudentBox,
  StudentInfo,
  StyledMail,
  Time,
  Wrapper
} from './Meeting.styles';
import blueStudent from 'assets/icons/BlueStudent.svg';
import AcceptIcon from 'assets/icons/AcceptIcon.png';
import CancelIcon from 'assets/icons/CancelIcon.png';
import MailIcon from 'assets/icons/MailIcon.svg';
import { authUser } from 'types/auth';
import { useMeeting } from 'hooks/useMeeting';
import { useModal } from 'hooks/useModal';
import Button from 'components/atoms/Button/Button';
import { CancelAddingStudent, ModalButtonsWrapper, ModalInfoWrapper } from 'views/Forms/ManageButtons/ManageButtons.styles';

interface Props {
  meetHour: string;
  user: authUser & { meetingId: number };
}

const Meeting: React.FC<Props> = ({ meetHour, user }) => {
  const { deleteMeeting } = useMeeting();
  const { openModal, closeModal } = useModal();

  return (
    <>
      <Time>
        <Line />
        <h1>{meetHour}</h1>
        <SecondLine />
      </Time>
      <Wrapper>
        <InfoWrapper>
          <StudentBox icon={blueStudent} />
          <StudentInfo>
            <h1>
              {user.first_name} {user.last_name}
            </h1>
            <EmailWrapper>
              <p>{user.TextClassName}</p>
              <StyledMail href={`mailto:${user.email}`} icon={MailIcon} />
            </EmailWrapper>
          </StudentInfo>
        </InfoWrapper>
        <BoxWrapper>
          <EditBox icon={AcceptIcon} onClick={() => deleteMeeting(user.meetingId)} />
          <DeleteBox
            icon={CancelIcon}
            onClick={() =>
              openModal(
                <ModalInfoWrapper>
                  <p style={{ fontSize: '1.3rem' }}>
                    Czy aby na pewno usunąć spotkanie z uczniem {user.first_name} {user.last_name}, dzisiaj o godzinie {meetHour}?
                  </p>
                  <ModalButtonsWrapper>
                    <CancelAddingStudent onClick={closeModal}>Anuluj</CancelAddingStudent>
                    <Button
                      onClick={() => {
                        deleteMeeting(user.meetingId);
                        closeModal();
                      }}
                      style={{ marginLeft: '1rem' }}
                    >
                      Usuń
                    </Button>
                  </ModalButtonsWrapper>
                </ModalInfoWrapper>,
                'Czy chcesz usunąć to spotkanie?'
              )
            }
          />
        </BoxWrapper>
      </Wrapper>
    </>
  );
};

export default Meeting;
