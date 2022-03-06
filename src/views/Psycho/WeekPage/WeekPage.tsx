import { MeetingWrapper, PageWrapper, Week, WeekWrapper } from './WeekPage.styles';
import { endOfWeek, format, startOfWeek } from 'date-fns';
import DayLink from 'components/molecules/DayLink/DayLink';

const WeekPage = () => {
  const weekStart = format(startOfWeek(new Date(), { weekStartsOn: 1 }), 'dd.MM');
  const weekEnd = format(endOfWeek(new Date(), { weekStartsOn: 1 }), 'dd.MM');

  return (
    <PageWrapper>
      <Week>
        <p>Aktualny tydzień</p>
        <WeekWrapper>
          {weekStart} - {weekEnd}
        </WeekWrapper>
      </Week>
      <MeetingWrapper>
        <DayLink name="monday" />
        <DayLink name="tuesday" />
        <DayLink name="wednesday" />
        <DayLink name="thursday" />
        <DayLink name="friday" />
      </MeetingWrapper>
    </PageWrapper>
  );
};

export default WeekPage;
