import styled from 'styled-components';
import DropdownSelect from 'components/atoms/DropdownSelect/DropdownSelect';
import Button from 'components/atoms/Button/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    padding: 1rem;
  }

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.s};
    padding-right: 2rem;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 2rem;
`;

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
