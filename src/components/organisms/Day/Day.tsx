import { useState } from 'react';
import ToggleSwitch from 'components/atoms/ToggleSwitch/ToggleSwitch';
import { DayWrapper, Heading, DayTimeWrapper } from './Day.styles';
import { useModal } from 'hooks/useModal';
import DayModal from 'components/molecules/DayModal/DayModal';

interface Props {
  dayName: string;
  startHour: string;
  endHour: string;
}

const Day: React.FC<Props> = ({ dayName, startHour, endHour }) => {
  const [toggle, setToggle] = useState(false);
  const { openModal, closeModal } = useModal();

  return (
    <DayWrapper>
      <div>
        <ToggleSwitch onChange={(event: any) => setToggle(event.target.checked)} />
        <Heading>{dayName}</Heading>
      </div>
      {toggle ? (
        <DayTimeWrapper>
          <p>
            {startHour} - {endHour}
          </p>
          <button onClick={() => openModal(<DayModal closeModal={closeModal} />, `${dayName}`)} />
        </DayTimeWrapper>
      ) : (
        <p>Nieobecność</p>
      )}
    </DayWrapper>
  );
};

export default Day;
