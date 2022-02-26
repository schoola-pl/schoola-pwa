import { DropdownWrapper, StyledButton, Wrapper } from './DayModal.styles';
import DropdownSelect from 'components/atoms/DropdownSelect/DropdownSelect';
import React from 'react';

interface props {
  closeModal: () => void;
  setDayTime: React.Dispatch<React.SetStateAction<{ start: string; end: string }>>;
}

const DayModal: React.FC<props> = ({ closeModal, setDayTime }) => {
  return (
    <Wrapper>
      <DropdownWrapper>
        <h1>Godziny przyjmowania</h1>
        <DropdownSelect setDayTime={setDayTime} type={'start'} />
        <p>-</p>
        <DropdownSelect setDayTime={setDayTime} type={'end'} />
      </DropdownWrapper>
      <StyledButton onClick={closeModal}>Zamknij</StyledButton>
    </Wrapper>
  );
};

export default DayModal;
