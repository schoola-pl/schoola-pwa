import { DropdownWrapper, StyledButton, Wrapper } from './DayModal.styles';
import DropdownSelect from 'components/atoms/DropdownSelect/DropdownSelect';

const DayModal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => (
  <Wrapper>
    <DropdownWrapper>
      <h1>Godziny przyjmowania</h1>
      <DropdownSelect />
      <p>-</p>
      <DropdownSelect />
    </DropdownWrapper>
    <StyledButton onClick={closeModal}>Zamknij</StyledButton>
  </Wrapper>
);

export default DayModal;
