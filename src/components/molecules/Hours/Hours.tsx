import React from 'react';
import { Hour, HoursWrapper } from './Hours.styles';
import { storeRoot, useAddExceptionMutation, useGetMeetingsExceptionQuery } from 'store';
import { format, parseISO } from 'date-fns';
import envHours from 'assets/globals/working-hours';
import Info from 'components/atoms/Info/Info';
import { useSelector } from 'react-redux';

interface props {
  date: string;
}

const Hours: React.FC<props> = ({ date }) => {
  const psycho = useSelector((state: storeRoot) => state.user);
  const [addException] = useAddExceptionMutation();
  const meetingsException = useGetMeetingsExceptionQuery({
    pId: psycho?.id || null,
    date
  });

  const hasNoException = (hour: string): boolean => {
    if (meetingsException.data) {
      const meetings = meetingsException.data;
      const meetingsForHour = meetings.filter((meeting) => meeting.hour === hour);
      return meetingsForHour.length === 0;
    }
    return false;
  };

  const handleAddException = (hour: string) => {
    if (!psycho) return;
    const newException = {
      pId: String(psycho.id),
      date,
      hour
    };
    addException(newException);
  };

  const printHours = () => {
    if (!psycho || !psycho.working_hours) return;
    const hours = psycho.working_hours.map((obj) => {
      if (obj.day === format(new Date(date), 'EEEE').toLowerCase()) {
        return envHours.map((hour) => {
          if (
            parseISO(`2022-01-01 ${hour}`) <= parseISO(`2022-01-01 ${obj.end}`) &&
            parseISO(`2022-01-01 ${hour}`) >= parseISO(`2022-01-01 ${obj.start}`)
          ) {
            return (
              <Hour key={hour} isCanceled={!hasNoException(hour)}>
                {hour}
                <button onClick={() => handleAddException(hour)} />
              </Hour>
            );
          }
        });
      }
    });
    const preparedHours = hours.filter((obj) => obj !== undefined);
    return preparedHours.length > 0 ? hours : <Info style={{ width: '100%', textAlign: 'center', gridColumn: '1 / 3' }}>Nieobecność</Info>;
  };

  return <HoursWrapper>{!psycho || meetingsException.isLoading ? 'Sprawdzam...' : printHours()}</HoursWrapper>;
};

export default Hours;
