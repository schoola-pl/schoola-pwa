import { DropdownWrapper, StyledButton, Wrapper } from './DayModal.styles';
import DropdownSelect from 'components/atoms/DropdownSelect/DropdownSelect';
import React from 'react';

interface props {
  closeModal: () => void;
  dayTime: {
    start: string;
    end: string;
  };
  setDayTime: React.Dispatch<React.SetStateAction<{ start: string; end: string }>>;
}

const DayModal: React.FC<props> = ({ closeModal, dayTime, setDayTime }) => {
  return (
    <Wrapper>
      <DropdownWrapper>
        <h1>Godziny przyjmowania</h1>
        <DropdownSelect dayTime={dayTime} setDayTime={setDayTime} type={'start'} />
        <p>-</p>
        <DropdownSelect dayTime={dayTime} setDayTime={setDayTime} type={'end'} />
      </DropdownWrapper>
      <StyledButton onClick={closeModal}>Zamknij</StyledButton>
    </Wrapper>
  );
};

export default DayModal;
