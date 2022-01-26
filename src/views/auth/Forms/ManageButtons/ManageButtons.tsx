import {
  AddStudentButton,
  ButtonWrapper,
  CancelAddingStudent,
  CancelButton,
  DeleteClassButton,
  Label,
  ModalButtonsWrapper,
  ModalInfoWrapper,
  Select,
  StyledForm,
  StyledInput
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
                  <CancelAddingStudent onClick={closeModal}>Anuluj</CancelAddingStudent>
                  <Button style={{ marginLeft: '1rem' }}>Dodaj ucznia</Button>
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
                <DeleteClassButton onClick={closeModal}>Anuluj</DeleteClassButton>
                <CancelButton>Usuń klasę 1E</CancelButton>
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
