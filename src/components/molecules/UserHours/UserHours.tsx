import { Hour, HoursWrapper } from './UserHours.styles';
import React from 'react';

const hours = ['8:00', '8:55', '9:50', '10:55', '11:50', '12:35'];

interface props {
  setActiveHour: React.Dispatch<React.SetStateAction<string | null>>;
  activeHour: string | null;
  psychoId: string;
}

const UserHours: React.FC<props> = ({ setActiveHour, psychoId, activeHour }) => {
  return (
    <HoursWrapper>
      {hours.map((hour) => (
        <Hour isActive={activeHour === hour}>
          {hour}
          <button onClick={() => setActiveHour(hour)} />
        </Hour>
      ))}
    </HoursWrapper>
  );
};

export default UserHours;
