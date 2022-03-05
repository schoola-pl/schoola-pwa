import { Hour, HoursWrapper } from './UserHours.styles';
import React from 'react';
import { useGetUserQuery } from 'store';
import { format, parseISO } from 'date-fns';
import envHours from 'assets/globals/working-hours';

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

  return (
    <HoursWrapper>
      {psycho.isLoading || !psycho.data || !psycho.data.working_hours
        ? 'Sprawdzam...'
        : psycho.data.working_hours.map((obj) => {
            if (obj.day === format(new Date(date), 'EEEE').toLowerCase()) {
              return envHours.map((hour) => {
                if (
                  parseISO(`2022-01-01 ${hour}`) < parseISO(`2022-01-01 ${obj.end}`) &&
                  parseISO(`2022-01-01 ${hour}`) > parseISO(`2022-01-01 ${obj.start}`)
                ) {
                  return (
                    <Hour key={hour} isActive={activeHour === hour}>
                      {hour}
                      <button onClick={() => setActiveHour(hour)} />
                    </Hour>
                  );
                }
              });
            }
          })}
    </HoursWrapper>
  );
};

export default UserHours;
