import React, { useState } from 'react';
import { BoxWrapper, Date as DateRecord, DeleteBox, EditBox, Name, Number, Role, StudentBox, Wrapper } from '../StudentDetail/StudentDetails.styles';
import blueStudent from '../../../assets/icons/BlueStudent.svg';
import EditIcon from '../../../assets/icons/EditIcon.png';
import DeleteIcon from '../../../assets/icons/DeleteIcon.svg';
import Input from '../../atoms/Input/Input';
import { Select } from '../../../views/auth/SchoolAdmin/AddClass/AddClass.styles';
import { useForm } from 'react-hook-form';
import { nanoid } from '@reduxjs/toolkit';
import { getRoleFromText } from '../../../helpers/roles';

interface props {
  info: {
    id: string;
    attributes: {
      first_name: string;
      last_name: string;
      TextRole: string;
      Birthday: string;
      blocked: boolean;
    };
  };
}

const StudentInfoRecord: React.FC<props> = ({
  info: {
    id,
    attributes: { first_name, Birthday, last_name, TextRole, blocked }
  }
}) => {
  const [isEdit, setEditState] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleEditUser = (data: { name: string; Birthday: string; TextRole: string }) => {
    const dividedName = data.name.split(' ');
    const first_name = dividedName[0];
    const last_name = dividedName[1];
    const preparedUser = {
      username: `${data.name.toLowerCase().split(' ').join('_')}`,
      email: `${nanoid()}@email.com`,
      first_name: first_name.charAt(0).toUpperCase() + first_name.slice(1),
      last_name: last_name.charAt(0).toUpperCase() + last_name.slice(1),
      Birthday: new Date(data.Birthday).toISOString(),
      TextRole: data.TextRole,
      role: getRoleFromText(data?.TextRole || 'Student')
    };
    setEditState(false);
  };

  return (
    <Wrapper as={'form'} onSubmit={handleSubmit(handleEditUser)} isBlocked={blocked}>
      <StudentBox icon={blueStudent} />
      {!isEdit ? (
        <Name>{`${first_name} ${last_name}`}</Name>
      ) : (
        <Input placeholder={`${first_name} ${last_name}`} small {...register('name', { required: true })} />
      )}
      {!isEdit ? (
        <Role>{TextRole === 'Student' ? 'Uczeń' : 'Samorząd Uczniowski'}</Role>
      ) : (
        <Select small {...register('TextRole', { required: true })}>
          <option value="Student">Uczeń</option>
          <option value="Moderator">Samorząd Uczniowski</option>
        </Select>
      )}
      {!isEdit ? <DateRecord>{Birthday}</DateRecord> : <Input type="date" value={Birthday} small {...register('Birthday', { required: true })} />}
      <Number>{id}</Number>
      <BoxWrapper>
        {!blocked && !isEdit && <EditBox onClick={() => setEditState((prev) => !prev)} icon={EditIcon} />}
        {!isEdit && <DeleteBox icon={DeleteIcon} />}
        {isEdit && <button>Accept</button>}
        {isEdit && <button onClick={() => setEditState(false)}>Cancel</button>}
      </BoxWrapper>
    </Wrapper>
  );
};

export default StudentInfoRecord;
