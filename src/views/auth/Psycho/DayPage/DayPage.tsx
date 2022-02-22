import PsychoTemplate from 'components/templates/PsychoTemplate/PsychoTemplate';
import styled from 'styled-components';
import Meeting from 'components/molecules/Meeting/Meeting';

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const MeetingWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
`;

const meetings = [
  {
    meetHour: '8:00',
    nameClass: '3RE',
    user: 'Krzysztof Jaruzel',
    email: 'krzysiek@gmail.com'
  },
  {
    meetHour: '8:55',
    nameClass: '2A',
    user: 'Tadeusz Romanow',
    email: 'tadeusz@gmail.com'
  },
  {
    meetHour: '9:50',
    nameClass: '3B',
    user: 'Jarek Tomaszewski',
    email: 'tadeusz@gmail.com'
  },
  {
    meetHour: '10:55',
    nameClass: '3B',
    user: 'Jarek Tomaszewski',
    email: 'tadeusz@gmail.com'
  },
  {
    meetHour: '11:50',
    nameClass: '3B',
    user: 'Jarek Tomaszewski',
    email: 'tadeusz@gmail.com'
  }
];

const DayPage = () => (
  <PsychoTemplate>
    <PageWrapper>
      <MeetingWrapper>
        {meetings.map(({ meetHour, nameClass, user, email }) => (
          <Meeting meetHour={meetHour} user={user} email={email} nameClass={nameClass} />
        ))}
      </MeetingWrapper>
    </PageWrapper>
  </PsychoTemplate>
);

export default DayPage;
