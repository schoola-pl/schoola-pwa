import React from 'react';
import {
  Time,
  Line,
  SecondLine,
  Wrapper,
  InfoWrapper,
  EmailWrapper,
  BoxWrapper,
  StudentBox,
  StudentInfo,
  EditBox,
  DeleteBox,
  StyledMail
} from './Meeting.styles';
import blueStudent from 'assets/icons/BlueStudent.svg';
import AcceptIcon from 'assets/icons/AcceptIcon.png';
import CancelIcon from 'assets/icons/CancelIcon.png';
import MailIcon from 'assets/icons/MailIcon.svg';

interface Props {
  meetHour: string;
  nameClass: string;
  user: string;
  email: string;
}

const Meeting: React.FC<Props> = ({ meetHour, nameClass, user, email }) => (
  <>
    <Time>
      <Line></Line>
      <h1>{meetHour}</h1>
      <SecondLine></SecondLine>
    </Time>
    <Wrapper>
      <InfoWrapper>
        <StudentBox icon={blueStudent} />
        <StudentInfo>
          <h1>{user}</h1>
          <EmailWrapper>
            <p>{nameClass}</p>
            <StyledMail href={`mailto:${email}`} icon={MailIcon} />
          </EmailWrapper>
        </StudentInfo>
      </InfoWrapper>
      <BoxWrapper>
        <EditBox icon={AcceptIcon} />
        <DeleteBox icon={CancelIcon} />
      </BoxWrapper>
    </Wrapper>
  </>
);

export default Meeting;
