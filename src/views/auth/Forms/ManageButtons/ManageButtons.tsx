import {
  ButtonWrapper,
  AddStudentButton,
  ModalInfoWrapper,
  StyledInput,
  Label,
  ModalButtonsWrapper,
  CancelAddingStudent,
  StyledForm,
  Select,
  DeleteClassButton,
  CancelButton
} from './ManageButtons.styles';
import Button from 'components/atoms/Button/Button';
import { useModal } from 'hooks/useModal';

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
                  <option value="">Wybierz rolę użytkownika</option>
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
