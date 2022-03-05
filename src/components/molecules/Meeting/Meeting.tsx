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

interface Props {
  meetHour: string;
  user: authUser & { meetingId: number };
}

const Meeting: React.FC<Props> = ({ meetHour, user }) => {
  const { deleteMeeting } = useMeeting();

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
          <DeleteBox icon={CancelIcon} onClick={() => deleteMeeting(user.meetingId)} />
        </BoxWrapper>
      </Wrapper>
    </>
  );
};

export default Meeting;
