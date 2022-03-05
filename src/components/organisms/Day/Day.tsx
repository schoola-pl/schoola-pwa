import React, { useEffect, useState } from 'react';
import ToggleSwitch from 'components/atoms/ToggleSwitch/ToggleSwitch';
import { DayTimeWrapper, DayWrapper, Heading } from './Day.styles';
import { useModal } from 'hooks/useModal';
import DayModal from 'components/molecules/DayModal/DayModal';
import defaultHours from 'assets/globals/working-hours';
import { translateDayToPolish } from 'helpers/week';
import { upperFirstLetter } from 'helpers/text';

interface Props {
  dayName: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  setDaysConfig: React.Dispatch<React.SetStateAction<{ day: string; start: string; end: string }[]>>;
}

const defaultWorkHours = {
  start: defaultHours[0],
  end: defaultHours[defaultHours.length - 1]
};

const Day: React.FC<Props> = ({ dayName, setDaysConfig }) => {
  const [toggle, setToggle] = useState(false);
  const [dayTime, setDayTime] = useState<{ start: string; end: string }>({
    start: defaultWorkHours.start,
    end: defaultWorkHours.end
  });
  const { openModal, closeModal } = useModal();

  useEffect(() => {
    if (toggle) {
      setDaysConfig((prevState) => {
        if (!prevState.some((obj) => obj.day === dayName)) {
          return [...prevState, { day: dayName, start: dayTime.start, end: dayTime.end }];
        } else {
          const buffer = prevState.filter((obj) => obj.day !== dayName);
          return [...buffer, { day: dayName, start: dayTime.start, end: dayTime.end }];
        }
      });
    }
  }, [dayTime]);

  useEffect(() => {
    if (!toggle) {
      setDaysConfig((prevState) => {
        return prevState.filter((obj) => obj.day !== dayName);
      });
    } else {
      setDaysConfig((prevState) => [...prevState, { day: dayName, start: dayTime.start, end: dayTime.end }]);
    }
  }, [toggle]);

  return (
    <DayWrapper>
      <div>
        <ToggleSwitch onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setToggle(ev.target?.checked)} />
        <Heading>{upperFirstLetter(translateDayToPolish(dayName))}</Heading>
      </div>
      {toggle ? (
        <DayTimeWrapper>
          <p>
            {dayTime.start} - {dayTime.end}
          </p>
          <button onClick={() => openModal(<DayModal closeModal={closeModal} dayTime={dayTime} setDayTime={setDayTime} />, `${dayName}`)} />
        </DayTimeWrapper>
      ) : (
        <p>Nieobecność</p>
      )}
    </DayWrapper>
  );
};

export default Day;
