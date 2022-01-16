import Input from '../../atoms/Input/Input';
import { PeopleWrapper, Select } from './UserRecord.styles';
import Button from '../../atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { storeRoot, useAddUserToClassMutation } from '../../../store';
import { getRoleFromText } from '../../../helpers/roles';
import { useSelector } from 'react-redux';
import React from 'react';
import { useClass } from '../../../hooks/useClass';
import { nanoid } from '@reduxjs/toolkit';
import Loader from 'components/atoms/Loader/Loader';

interface props {
  index: number;
}

const UserRecord: React.FC<props> = ({ index: i }) => {
  const {
    register: registerUser,
    formState: { errors },
    handleSubmit: handleSaveUser
  } = useForm();
  const [addUser, { isLoading, isSuccess }] = useAddUserToClassMutation();
  const user = useSelector((state: storeRoot) => state.user);
  const { classId } = useClass();

  const saveUser = (tempUser: { name: string; birthday: string; TextRole: string; first_name?: string; last_name?: string }) => {
    if (isLoading) return;
    const dividedName = tempUser.name.split(' ');
    tempUser.first_name = dividedName[0];
    tempUser.last_name = dividedName[1];
    const preparedUser = {
      username: `${tempUser.name.toLowerCase().split(' ').join('_')}`,
      email: `${nanoid()}@email.com`,
      first_name: tempUser.first_name.charAt(0).toUpperCase() + tempUser.first_name.slice(1),
      last_name: tempUser.last_name.charAt(0).toUpperCase() + tempUser.last_name.slice(1),
      confirmed: true,
      blocked: false,
      birthday: tempUser.birthday,
      avatar: null,
      schoolId: user?.schoolId || null,
      textRole: tempUser.TextRole,
      role: getRoleFromText(tempUser?.TextRole || 'Student'),
      class: classId,
      password: nanoid()
    };
    addUser({ ...preparedUser });
  };

  return (
    <PeopleWrapper as={'form'} onSubmit={handleSaveUser(saveUser)}>
      <h1 style={{ color: isSuccess ? 'green' : undefined }}>{i + 1}.</h1>
      <>
        <Input
          type="text"
          placeholder="Imię i nazwisko"
          error={errors.name}
          {...registerUser('name', {
            required: true,
            pattern: /\b([A-ZÀ-ÿ][a-z 'AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż]+[ ]*)+/gm
          })}
          disabled={isSuccess}
        />
        <Select {...registerUser('role', { required: true })} disabled={isSuccess}>
          <option value="Student">Uczeń</option>
          <option value="Moderator">Samorząd Uczniowski</option>
          <option value="School Admin">Administrator</option>
        </Select>
        <Input type="date" placeholder="urodziny" error={errors.birthday} {...registerUser('birthday', { required: true })} disabled={isSuccess} />
        <Button isIcon isDisabled={isSuccess}>
          {!isLoading ? '+' : <Loader fitContent />}
        </Button>
      </>
    </PeopleWrapper>
  );
};

export default UserRecord;
