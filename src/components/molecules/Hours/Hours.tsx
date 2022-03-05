import { useState } from 'react';
import { Hour, HoursWrapper } from './Hours.styles';

const hours = ['8:00', '8:55', '9:50', '10:55', '11:50', '12:35'];

const Hours = () => {
  const [isCanceled, setCancel] = useState(false);

  const handleCancelHour = () => {
    setCancel(!isCanceled);
  };

  return (
    <HoursWrapper>
      {hours.map((hour) => (
        <Hour>
          {hour} <button />
        </Hour>
      ))}
    </HoursWrapper>
  );
};

export default Hours;
