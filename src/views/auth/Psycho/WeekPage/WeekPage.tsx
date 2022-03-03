import { DayLink, MeetingWrapper, PageWrapper, Week, WeekWrapper } from './WeekPage.styles';
import { endOfWeek, format, startOfWeek } from 'date-fns';

const WeekPage = () => {
  const weekStart = format(startOfWeek(new Date(), { weekStartsOn: 1 }), 'dd.MM');
  const weekEnd = format(endOfWeek(new Date(), { weekStartsOn: 1 }), 'dd.MM');

  return (
    <PageWrapper>
      <Week>
        <WeekWrapper>
          <p>
            {weekStart} - {weekEnd}
          </p>
        </WeekWrapper>
      </Week>
      <MeetingWrapper>
        <DayLink to="/psycho/week/monday">
          <h1>Poniedziałek</h1>
          <p>
            liczba spotkań - <strong>5</strong>
          </p>
        </DayLink>
        <DayLink to="/psycho/week/tuesday">
          <h1>Wtorek</h1>
          <p>
            liczba spotkań - <strong>3</strong>
          </p>
        </DayLink>
        <DayLink to="/psycho/week/wednesday">
          <h1>Środa</h1>
          <p>
            liczba spotkań - <strong>4</strong>
          </p>
        </DayLink>
        <DayLink to="/psycho/week/thursday">
          <h1>Czwartek</h1>
          <p>
            liczba spotkań - <strong>2</strong>
          </p>
        </DayLink>
        <DayLink to="/psycho/week/friday">
          <h1>Piątek</h1>
          <p>
            liczba spotkań - <strong>1</strong>
          </p>
        </DayLink>
      </MeetingWrapper>
    </PageWrapper>
  );
};

export default WeekPage;
