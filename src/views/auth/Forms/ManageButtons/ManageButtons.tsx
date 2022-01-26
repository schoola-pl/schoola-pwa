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
import React from 'react';

interface props {
  className: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteClass: any;
}

const ManageButtons: React.FC<props> = ({ className, deleteClass }) => {
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
                  <option value="Student">Uczeń</option>
                  <option value="Moderator">Samorząd Uczniowski</option>
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
              <h1>Czy chcesz usunąć klasę {className}?</h1>
              <div>
                <DeleteClassButton style={{ marginRight: '1rem' }} onClick={closeModal}>
                  Anuluj
                </DeleteClassButton>
                <CancelButton onClick={deleteClass}>Usuń klasę {className}</CancelButton>
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
