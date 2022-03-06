import { Hour, HoursWrapper } from './UserHours.styles';
import React from 'react';
import { useGetUserQuery } from 'store';
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

  const printHours = () => {
    if (!psycho.data || !psycho.data.working_hours) return;
    const hours = psycho.data.working_hours.map((obj) => {
      if (obj.day === format(new Date(date), 'EEEE').toLowerCase()) {
        return envHours.map((hour) => {
          if (
            parseISO(`2022-01-01 ${hour}`) <= parseISO(`2022-01-01 ${obj.end}`) &&
            parseISO(`2022-01-01 ${hour}`) >= parseISO(`2022-01-01 ${obj.start}`)
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
    });
    const preparedHours = hours.filter((obj) => obj !== undefined);
    return preparedHours.length > 0 ? hours : <Info style={{ width: '100%', textAlign: 'center', gridColumn: '1 / 3' }}>Psycholog nieobecny</Info>;
  };

  return <HoursWrapper>{psycho.isLoading ? 'Sprawdzam...' : printHours()}</HoursWrapper>;
};

export default UserHours;
