import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { useModal } from 'hooks/useModal';

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
`;

const ManageButton = styled.button`
  margin-right: 2rem;
  background-color: white;
  border-radius: 1rem;
  width: 11.5rem;
  height: 5rem;
  text-align: center;

  transition: 0.1s all ease-in-out;

  &:hover {
    cursor: pointer;
    color: white;
  }
`;

export const DeleteClassButton = styled(ManageButton)`
  border: none;
  background-color: ${({ theme }) => theme.colors.accentRed};
  color: white;

  &:hover {
    opacity: 0.9;
  }
`;

export const AddStudentButton = styled(ManageButton)`
  border: 2px solid ${({ theme }) => theme.colors.accentGreen};
  color: ${({ theme }) => theme.colors.accentGreen};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentGreen};
  }
`;

export const ModalInfoWrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    margin-bottom: 2rem;
  }
`;

export const CancelButton = styled(ManageButton)`
  margin-right: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  color: white;

  &:hover {
    cursor: pointer;
    color: white;
    opacity: 0.9;
  }
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 1.5rem 0 1rem 0.5rem;
`;

const StyledInput = styled(Input)`
  width: 45rem;
`;

const Select = styled.select`
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  resize: none;
  border: 2px solid ${({ theme }) => theme.colors.selectedItemGrey};
  transition: border 0.3s linear;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.accentGreen};
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CancelAddingStudent = styled(Button)`
  margin-left: 1rem;
  background-color: ${({ theme }) => theme.colors.accentRed};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentRed};
    opacity: 0.9;
  }
`;

const ModalButtonsWrapper = styled(ButtonWrapper)`
  margin-top: 3rem;
`;

const ManageButtons = () => {
  const { openModal, closeModal } = useModal();

  return (
    <ButtonWrapper>
      <AddStudentButton
        onClick={() =>
          openModal(
            <ModalInfoWrapper>
              <StyledForm>
                <Label htmlFor="name">Imię i nazwisko</Label>
                <StyledInput name="name" />
                <Label htmlFor="role">Rola</Label>
                <Select name="role">
                  <option value="1">Uczeń</option>
                  <option value="2">Samorząd Uczniowski</option>
                </Select>
                <Label htmlFor="date">Data urodzenia</Label>
                <StyledInput name="date" type="date" />
                <ModalButtonsWrapper>
                  <Button>Dodaj ucznia</Button>
                  <CancelAddingStudent onClick={closeModal}>Anuluj</CancelAddingStudent>
                </ModalButtonsWrapper>
              </StyledForm>
            </ModalInfoWrapper>,
            'Dodaj ucznia'
          )
        }
      >
        Dodaj ucznia
      </AddStudentButton>
      <DeleteClassButton
        onClick={() =>
          openModal(
            <ModalInfoWrapper>
              <h1>Czy chcesz usunąć klasę 1E?</h1>
              <div>
                <CancelButton onClick={closeModal}>Anuluj</CancelButton>
                <DeleteClassButton>Usuń klasę 1E</DeleteClassButton>
              </div>
            </ModalInfoWrapper>,
            'Usuń klasę'
          )
        }
      >
        Usuń klasę
      </DeleteClassButton>
    </ButtonWrapper>
  );
};

export default ManageButtons;
