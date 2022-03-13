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
import { useForm } from 'react-hook-form';
import { useUser } from 'hooks/useUser';
import { copy } from 'helpers/copy';

interface props {
  className: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteClass: any;
  classId: number;
}

const ManageButtons: React.FC<props> = ({ className, deleteClass, classId }) => {
  const { openModal, closeModal } = useModal();
  const { register, handleSubmit, reset } = useForm();
  const { addNewUser } = useUser();

  const handleAddUser = async (data: { name: string; birthday: string; TextRole: string; first_name: string; last_name: string }) => {
    closeModal();
    const createdUser = await addNewUser(data, classId, className);
    const { login, password, name } = createdUser as { login: string; password: string; name: string };
    copy(`Użytkownik: ${name || 'błąd'} | Login: ${login || 'błąd'} | Hasło: ${password || 'błąd'}`, () => {
      alert('Dane nowo stworzonego użytkownika zostały skopiowane do schowka!');
    });
    reset();
  };

  return (
    <ButtonWrapper>
      <AddStudentButton
        onClick={() =>
          openModal(
            <ModalInfoWrapper>
              <StyledForm onSubmit={handleSubmit(handleAddUser)}>
                <Label htmlFor="name">Imię i nazwisko</Label>
                <StyledInput {...register('name', { required: true })} />
                <Label htmlFor="role">Rola</Label>
                <Select {...register('TextRole', { required: true })}>
                  <option value="Student">Uczeń</option>
                  <option value="Moderator">Samorząd Uczniowski</option>
                </Select>
                <Label htmlFor="date">Data urodzenia</Label>
                <StyledInput type="date" {...register('birthday', { required: true })} />
                <ModalButtonsWrapper>
                  <Button style={{ marginRight: '1rem' }}>Dodaj ucznia</Button>
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
