import React, { useState } from 'react';
import ToggleSwitch from 'components/atoms/ToggleSwitch/ToggleSwitch';
import { DayTimeWrapper, DayWrapper, Heading } from './Day.styles';
import { useModal } from 'hooks/useModal';
import DayModal from 'components/molecules/DayModal/DayModal';

interface Props {
  dayName: string;
}

const defaultWorkHours = {
  start: '08:00',
  end: '16:00'
};

const Day: React.FC<Props> = ({ dayName }) => {
  const [toggle, setToggle] = useState(false);
  const [dayTime, setDayTime] = useState<{ start: string; end: string }>({
    start: defaultWorkHours.start,
    end: defaultWorkHours.end
  });
  const { openModal, closeModal } = useModal();

  return (
    <DayWrapper>
      <div>
        <ToggleSwitch onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setToggle(ev.target?.checked)} />
        <Heading>{dayName}</Heading>
      </div>
      {toggle ? (
        <DayTimeWrapper>
          <p>
            {dayTime.start} - {dayTime.end}
          </p>
          <button onClick={() => openModal(<DayModal closeModal={closeModal} setDayTime={setDayTime} />, `${dayName}`)} />
        </DayTimeWrapper>
      ) : (
        <p>Nieobecność</p>
      )}
    </DayWrapper>
  );
};

export default Day;
