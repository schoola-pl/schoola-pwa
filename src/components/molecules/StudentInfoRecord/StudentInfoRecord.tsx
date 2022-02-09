import React, { useState } from 'react';
import { BoxWrapper, Date as DateRecord, DeleteBox, EditBox, Name, Number, Role, StudentBox, Wrapper } from '../StudentDetail/StudentDetails.styles';
import blueStudent from '../../../assets/icons/BlueStudent.svg';
import EditIcon from '../../../assets/icons/EditIcon.png';
import DeleteIcon from '../../../assets/icons/DeleteIcon.svg';
import Input from '../../atoms/Input/Input';
import { Select } from 'views/auth/SchoolAdmin/AddClass/AddClass.styles';
import { useForm } from 'react-hook-form';
import AcceptIcon from 'assets/icons/AcceptIcon.png';
import CancelIcon from 'assets/icons/CancelIcon.png';
import { useUser } from 'hooks/useUser';

interface props {
  info: {
    id: number;
    attributes: {
      first_name: string;
      last_name: string;
      TextRole: string;
      Birthday: string;
      blocked: boolean;
    };
  };
  userToFind: string;
}

const StudentInfoRecord: React.FC<props> = ({
  info: {
    id,
    attributes: { first_name, Birthday, last_name, TextRole, blocked }
  },
  userToFind
}) => {
  const [isEdit, setEditState] = useState(false);
  const { register, handleSubmit } = useForm();
  const { updateSettings, deleteUser } = useUser();

  const handleEditUser = (data: { name: string; Birthday: string; TextRole: string }) => {
    const first_name = data.name.split(' ')[0] || '';
    const last_name = data.name.split(' ')[1] || '';
    updateSettings(
      {
        first_name: first_name.charAt(0).toUpperCase() + first_name.slice(1),
        last_name: last_name.charAt(0).toUpperCase() + last_name.slice(1),
        Birthday: data.Birthday,
        TextRole: data.TextRole,
        username: data.name.toLowerCase().split(' ').join('_')
      },
      id
    );
    setEditState(false);
  };

  return (
    <Wrapper
      as={'form'}
      id={`${first_name.toLowerCase()}-${last_name.toLowerCase()}`}
      isHighlighted={userToFind === `${first_name.toLowerCase()}-${last_name.toLowerCase()}`}
      onSubmit={handleSubmit(handleEditUser)}
      isBlocked={blocked}
    >
      <StudentBox icon={blueStudent} />
      {!isEdit ? <Name>{`${first_name} ${last_name}`}</Name> : <Input placeholder={`${first_name} ${last_name}`} small {...register('name')} />}
      {!isEdit ? (
        <Role>{TextRole === 'Student' ? 'Uczeń' : 'Samorząd Uczniowski'}</Role>
      ) : (
        <Select small {...register('TextRole')}>
          <option value="Student" selected={TextRole === 'Student'}>
            Uczeń
          </option>
          <option value="Moderator" selected={TextRole !== 'Student'}>
            Samorząd Uczniowski
          </option>
        </Select>
      )}
      {!isEdit ? <DateRecord>{Birthday}</DateRecord> : <Input type="date" small {...register('Birthday')} />}
      <Number>{id}</Number>
      <BoxWrapper>
        {!blocked && !isEdit && <EditBox data-testid="edition-button" onClick={() => setEditState((prev) => !prev)} icon={EditIcon} />}
        {!isEdit && <DeleteBox data-testid="delete-button" icon={DeleteIcon} onClick={() => deleteUser(id)} />}
        {isEdit && <EditBox icon={AcceptIcon} />}
        {isEdit && <DeleteBox icon={CancelIcon} onClick={() => setEditState(false)} />}
      </BoxWrapper>
    </Wrapper>
  );
};

export default StudentInfoRecord;
