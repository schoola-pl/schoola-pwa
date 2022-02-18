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

const Meeting = () => (
  <>
    <Time>
      <Line></Line>
      <h1>8:00</h1>
      <SecondLine></SecondLine>
    </Time>
    <Wrapper>
      <InfoWrapper>
        <StudentBox icon={blueStudent} />
        <StudentInfo>
          <h1>Tomasz Krzysztofski</h1>
          <EmailWrapper>
            <p>3E</p>
            <StyledMail href="mailto:name@email.com" icon={MailIcon} />
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
