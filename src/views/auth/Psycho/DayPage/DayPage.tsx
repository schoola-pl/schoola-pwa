import { Header, MeetingWrapper, PageWrapper } from './DayPage.styles';
import { useParams } from 'react-router';
import { translateDayToPolish } from 'helpers/week';
import { upperFirstLetter } from 'helpers/text';

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

const DayPage = () => {
  const { dayName } = useParams();
  const dayPolish = upperFirstLetter(
    translateDayToPolish((dayName as 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday') || 'monday')
  );

  return (
    <PageWrapper>
      <Header>
        <p>Spotkania na dzień: </p>
        <h3>{dayPolish}</h3>
      </Header>
      <MeetingWrapper>
        {/*{meetings.map(({ meetHour, nameClass, user, email }) => (*/}
        {/*  <Meeting meetHour={meetHour} user={user} />*/}
        {/*))}*/}
      </MeetingWrapper>
    </PageWrapper>
  );
};

export default DayPage;
