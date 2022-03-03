import { MeetingWrapper, PageWrapper } from './DayPage.styles';
import Meeting from 'components/molecules/Meeting/Meeting';

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
  <PageWrapper>
    <MeetingWrapper>
      {meetings.map(({ meetHour, nameClass, user, email }) => (
        <Meeting meetHour={meetHour} user={user} email={email} nameClass={nameClass} />
      ))}
    </MeetingWrapper>
  </PageWrapper>
);

export default DayPage;
