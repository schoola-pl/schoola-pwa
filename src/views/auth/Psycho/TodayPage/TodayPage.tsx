import styled from 'styled-components';
import PsychoTemplate from 'components/templates/PsychoTemplate/PsychoTemplate';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import blueStudent from 'assets/icons/BlueStudent.svg';
import AcceptIcon from 'assets/icons/AcceptIcon.png';
import CancelIcon from 'assets/icons/CancelIcon.png';
import PsychoGreet from 'components/molecules/PsychoGreet/PsychoGreet';
import MailIcon from 'assets/icons/MailIcon.svg';

const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Meeting = styled.div`
  height: 10rem;
  border-radius: 1.5rem;
  background-color: white;
  box-shadow: ${({ theme }) => theme.innerStyles.box};
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MeetingWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  height: 100%;
  transform: translateY(-10%);
`;

const Box = styled(SidebarLink)`
  border-radius: 1rem;
  height: 4.75rem;
  width: 4.75rem;
  padding: 1rem;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export const EditBox = styled(Box)`
  background-color: #e8fcd9;
  width: 4rem;
  height: 4rem;
`;

export const StudentBox = styled(Box)`
  background-color: #b8d0fc;
`;

export const StudentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    transform: translateY(40%);
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  p {
    text-align: left;
    font-size: 1.5rem;
  }
`;

export const DeleteBox = styled(Box)`
  background-color: #fcb3b0;
  width: 4rem;
  height: 4rem;
`;

export const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: center;

  h1 {
    width: 100%;
    display: inline;
    color: ${({ theme }) => theme.colors.selectedItemGrey};
    padding: 1rem;
    text-align: left;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const Line = styled.div`
  height: 2px;
  background: ${({ theme }) => theme.colors.selectedItemGrey};
  width: 50%;
`;

const SecondLine = styled.div`
  height: 2px;
  background: ${({ theme }) => theme.colors.selectedItemGrey};
  width: 1000%;
`;

const StyledMail = styled.a<{ icon: string }>`
  text-decoration: none;
  height: 4.3rem;
  width: 4.3rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: transparent;
  border-radius: 1.5rem;
  border: none;
  display: block;
  background-size: 75%;
  background-position: center;
  cursor: pointer;
`;

const EmailWrapper = styled.div`
  transform: translateY(-20%);
  display: flex;
  align-items: center;
  justify-content: space-between;s
`;

const TodayPage = () => (
  <PsychoTemplate>
    <PageWrapper>
      <PsychoGreet />
      <MeetingWrapper>
        <>
          <Time>
            <Line></Line>
            <h1>8:00</h1>
            <SecondLine></SecondLine>
          </Time>
          <Meeting>
            <InfoWrapper>
              <StudentBox icon={blueStudent} />
              <StudentInfo>
                <h1>Tomasz Chic</h1>
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
          </Meeting>
        </>
        <>
          <Time>
            <Line></Line>
            <h1>8:55</h1>
            <SecondLine></SecondLine>
          </Time>
          <Meeting>
            <InfoWrapper>
              <StudentBox icon={blueStudent} />
              <StudentInfo>
                <h1>Tomasz Chic</h1>
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
          </Meeting>
        </>
        <>
          <Time>
            <Line></Line>
            <h1>9:50</h1>
            <SecondLine></SecondLine>
          </Time>
          <Meeting>
            <InfoWrapper>
              <StudentBox icon={blueStudent} />
              <StudentInfo>
                <h1>Tomasz Chic</h1>
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
          </Meeting>
        </>
        <>
          <Time>
            <Line></Line>
            <h1>10:55</h1>
            <SecondLine></SecondLine>
          </Time>
          <Meeting>
            <InfoWrapper>
              <StudentBox icon={blueStudent} />
              <StudentInfo>
                <h1>Tomasz Chic</h1>
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
          </Meeting>
        </>
        <>
          <Time>
            <Line></Line>
            <h1>11:50</h1>
            <SecondLine></SecondLine>
          </Time>
          <Meeting>
            <InfoWrapper>
              <StudentBox icon={blueStudent} />
              <StudentInfo>
                <h1>Tomasz Chic</h1>
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
          </Meeting>
        </>
      </MeetingWrapper>
    </PageWrapper>
  </PsychoTemplate>
);

export default TodayPage;
