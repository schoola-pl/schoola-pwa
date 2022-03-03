import { MeetingWrapper, PageWrapper } from './TodayPage.styles';
import PsychoGreet from 'components/molecules/PsychoGreet/PsychoGreet';
import { storeRoot, useGetMeetingsForDayQuery } from 'store';
import { useSelector } from 'react-redux';
import Meeting from 'components/molecules/Meeting/Meeting';

const TodayPage = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const meetings = useGetMeetingsForDayQuery({
    pId: user?.id || null,
    date: new Date().toISOString().slice(0, 10)
  });

  return (
    <PageWrapper>
      {meetings.isLoading || !meetings.data ? (
        <p>Wczytywanie...</p>
      ) : (
        <>
          <PsychoGreet meetingsCount={meetings.data.length} />
          <MeetingWrapper>
            {meetings.data.map(({ start, user }) => (
              <Meeting meetHour={start} user={user} />
            ))}
          </MeetingWrapper>
        </>
      )}
    </PageWrapper>
  );
};

export default TodayPage;
