import { Hour, HoursWrapper } from './UserHours.styles';
import React from 'react';
import { useGetMeetingsExceptionQuery, useGetMeetingsForDayQuery, useGetUserQuery } from 'store';
import { format, parseISO } from 'date-fns';
import envHours from 'assets/globals/working-hours';
import Info from 'components/atoms/Info/Info';

interface props {
  setActiveHour: React.Dispatch<React.SetStateAction<string | null>>;
  activeHour: string | null;
  psychoId: string;
  date: string;
}

const UserHours: React.FC<props> = ({ setActiveHour, date, psychoId, activeHour }) => {
  const psycho = useGetUserQuery({
    userId: psychoId
  });
  const meetingsForDay = useGetMeetingsForDayQuery({
    pId: psychoId,
    date
  });
  const meetingsException = useGetMeetingsExceptionQuery({
    pId: psychoId,
    date
  });

  const isNotBooked = (hour: string): boolean => {
    if (meetingsForDay.data) {
      const meetings = meetingsForDay.data;
      const meetingsForHour = meetings.filter((meeting) => meeting.start === hour);
      return meetingsForHour.length === 0;
    }
    return false;
  };

  const hasNoException = (hour: string): boolean => {
    if (meetingsException.data) {
      const meetings = meetingsException.data;
      const meetingsForHour = meetings.filter((meeting) => meeting.hour === hour);
      return meetingsForHour.length === 0;
    }
    return false;
  };

  const printHours = () => {
    if (!psycho.data || !psycho.data.working_hours) return;
    const hours = psycho.data.working_hours.map((obj) => {
      if (obj.day === format(new Date(date), 'EEEE').toLowerCase()) {
        return envHours.map((hour) => {
          if (
            parseISO(`2022-01-01 ${hour}`) <= parseISO(`2022-01-01 ${obj.end}`) &&
            parseISO(`2022-01-01 ${hour}`) >= parseISO(`2022-01-01 ${obj.start}`) &&
            isNotBooked(hour) &&
            hasNoException(hour)
          ) {
            return (
              <Hour key={hour} isActive={activeHour === hour}>
                {hour}
                <button data-testid={`appointment-hour-${hour}`} onClick={() => setActiveHour(hour)} />
              </Hour>
            );
          }
        });
      }
    });
    const preHours = hours.filter((hour) => hour !== undefined);
    const preparedHours = preHours[0]?.filter((obj) => obj !== undefined) || [];
    return preparedHours.length > 0 ? (
      hours
    ) : (
      <Info style={{ width: '100%', textAlign: 'center', gridColumn: '1 / 3' }} data-testid="appointment-paragraph">
        Psycholog nieobecny
      </Info>
    );
  };

  return <HoursWrapper data-testid="appointment-hours">{psycho.isLoading || meetingsForDay.isLoading ? 'Sprawdzam...' : printHours()}</HoursWrapper>;
};

export default UserHours;
