import { Header, MeetingWrapper, PageWrapper } from './DayPage.styles';
import { useParams } from 'react-router';
import { getDayOfWeek, translateDayToPolish } from 'helpers/week';
import { upperFirstLetter } from 'helpers/text';
import { useSelector } from 'react-redux';
import { storeRoot, useGetMeetingsForDayQuery } from 'store';
import Meeting from 'components/molecules/Meeting/Meeting';
import React from 'react';
import Info from 'components/atoms/Info/Info';

const DayPage = () => {
  const { dayName } = useParams();
  const preparedDayName = dayName as 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';
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
          <Info>Wczytywanie...</Info>
        ) : meetings.data.length > 0 ? (
          meetings.data.map(({ start, user }) => <Meeting key={start} meetHour={start} user={user} />)
        ) : (
          <Info>Brak spotkań na ten dzień!</Info>
        )}
      </MeetingWrapper>
    </PageWrapper>
  );
};

export default DayPage;
