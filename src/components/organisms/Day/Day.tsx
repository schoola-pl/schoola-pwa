import { useState } from 'react';
import ToggleSwitch from 'components/atoms/ToggleSwitch/ToggleSwitch';
import styled from 'styled-components';
import { useModal } from 'hooks/useModal';
import DayModal from 'components/molecules/DayModal/DayModal';

const DayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 89%;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #f7f8fa;
  margin-bottom: 2rem;

  div {
    display: flex;
    align-items: center;
  }
`;

const DayTimeWrapper = styled.div`
  display: flex;

  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  button {
    display: flex;
    align-items: center;
    padding-left: 2.5rem;
    border: none;
    background-color: white;

    &::after {
      content: '>';
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

const Heading = styled.h1`
  padding-left: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
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
