import { Header, MeetingWrapper, PageWrapper } from './DayPage.styles';
import { useParams } from 'react-router';
import { getDayOfWeek, translateDayToPolish } from 'helpers/week';
import { upperFirstLetter } from 'helpers/text';
import { useSelector } from 'react-redux';
import { storeRoot, useGetMeetingsForDayQuery } from 'store';
import Meeting from 'components/molecules/Meeting/Meeting';
import React from 'react';

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
  const preparedDayName = dayName as 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  const dayISO = getDayOfWeek(preparedDayName);
  const dayPolish = upperFirstLetter(translateDayToPolish(preparedDayName || 'monday'));
  const user = useSelector((state: storeRoot) => state.user);
  const meetings = useGetMeetingsForDayQuery({
    pId: user?.id || null,
    date: dayISO
  });

  return (
    <PageWrapper>
      <Header>
        <p>Spotkania na dzień: </p>
        <h3>{dayPolish}</h3>
      </Header>
      <MeetingWrapper>
        {meetings.isLoading || !meetings.data ? (
          <p>Wczytywanie...</p>
        ) : (
          meetings.data.map(({ start, user }) => <Meeting meetHour={start} user={user} />)
        )}
      </MeetingWrapper>
    </PageWrapper>
  );
};

export default DayPage;
