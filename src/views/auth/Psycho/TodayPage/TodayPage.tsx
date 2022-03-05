import { MeetingWrapper, PageWrapper } from './TodayPage.styles';
import PsychoGreet from 'components/molecules/PsychoGreet/PsychoGreet';
import { storeRoot, useGetMeetingsForDayQuery } from 'store';
import { useSelector } from 'react-redux';
import Meeting from 'components/molecules/Meeting/Meeting';
import Info from 'components/atoms/Info/Info';

const TodayPage = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const meetings = useGetMeetingsForDayQuery({
    pId: user?.id || null,
    date: new Date().toISOString().slice(0, 10)
  });

  return (
    <PageWrapper>
      <PsychoGreet />
      {meetings.isLoading || !meetings.data ? (
        <Info>Wczytywanie...</Info>
      ) : meetings.data.length > 0 ? (
        <MeetingWrapper>
          {meetings.data.map(({ start, user }) => (
            <Meeting meetHour={start} user={user} />
          ))}
        </MeetingWrapper>
      ) : (
        <Info>Dzisiaj masz już wolne! 😎</Info>
      )}
    </PageWrapper>
  );
};

export default TodayPage;
