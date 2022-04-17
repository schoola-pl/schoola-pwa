import { MeetingWrapper, PageWrapper, Week, WeekWrapper } from './WeekPage.styles';
import DayLink from 'components/molecules/DayLink/DayLink';
import ReloadWidget from 'components/atoms/ReloadWidget/ReloadWidget';
import { useState } from 'react';
import { getDayOfWeek } from '../../../helpers/week';

const futureWeeks = 2;

const WeekPage = () => {
  const [week, setWeek] = useState(0);
  const weekStart = getDayOfWeek('monday', { customWeek: week, customPattern: 'dd.MM' });
  const weekEnd = getDayOfWeek('friday', { customWeek: week, customPattern: 'dd.MM' });

  return (
    <>
      <PageWrapper>
        <Week>
          <div onClick={() => setWeek((prev) => (prev !== 0 ? --prev : prev))} className={`arrows ${week !== 0 ? 'active' : ''}`}>
            &lt;
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p>Aktualny tydzień</p>
            <WeekWrapper>
              {weekStart} - {weekEnd}
            </WeekWrapper>
          </div>
          <div onClick={() => setWeek((prev) => (prev !== futureWeeks ? ++prev : prev))} className={`arrows ${week !== futureWeeks ? 'active' : ''}`}>
            &gt;
          </div>
        </Week>
        <MeetingWrapper>
          <DayLink name="monday" currentWeek={week} />
          <DayLink name="tuesday" currentWeek={week} />
          <DayLink name="wednesday" currentWeek={week} />
          <DayLink name="thursday" currentWeek={week} />
          <DayLink name="friday" currentWeek={week} />
        </MeetingWrapper>
      </PageWrapper>
      <ReloadWidget />
    </>
  );
};

export default WeekPage;
