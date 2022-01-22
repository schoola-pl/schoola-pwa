import Input from '../../atoms/Input/Input';
import { PeopleWrapper, Select } from './UserRecord.styles';
import Button from '../../atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { storeRoot, useAddUserToClassMutation, useGetUsersCountQuery, useUpdateSchoolCountMutation } from '../../../store';
import { getRoleFromText } from '../../../helpers/roles';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
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
  const user = useSelector((state: storeRoot) => state.user);
  const [addUser, { isLoading, isSuccess }] = useAddUserToClassMutation();
  const usersCount = useGetUsersCountQuery({ schoolId: user?.schoolId || null });
  const [addToSchoolCount] = useUpdateSchoolCountMutation();
  const [createdUser, setNewUser] = useState<Partial<{ login: string; name: string; password: string }>>({});
  const { classId } = useClass();
  const [isCopied, setIsCopied] = useState(false);

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
      Birthday: new Date(tempUser.birthday).toISOString(),
      avatar: null,
      schoolId: user?.schoolId || null,
      TextRole: tempUser.TextRole,
      role: getRoleFromText(tempUser?.TextRole || 'Student'),
      class: classId,
      password: nanoid()
    };
    addUser({ ...preparedUser });
    setNewUser({
      name: `${preparedUser.first_name} ${preparedUser.last_name}`,
      login: preparedUser.username,
      password: preparedUser.password
    });
    addToSchoolCount({
      schoolId: user?.schoolId || null,
      totalUsers: usersCount.data.data[0].attributes.totalUsers + 1
    });
  };

  const copyUserPasses = () => {
    if (createdUser) {
      const cb = navigator.clipboard;
      const { login, password, name } = createdUser;
      cb.writeText(`Użytkownik: ${name || 'błąd'} | Login: ${login || 'błąd'} | Hasło: ${password || 'błąd'}`).then(() => {
        setIsCopied(true);
        setInterval(() => {
          setIsCopied(false);
        }, 5000);
      });
    }
  };

  return (
    <PeopleWrapper as={'form'} onSubmit={handleSaveUser(saveUser)}>
      <h1 style={{ color: isSuccess ? 'green' : undefined }}>{i + 1}.</h1>
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
      </Select>
      <Input type="date" placeholder="urodziny" error={errors.birthday} {...registerUser('birthday', { required: true })} disabled={isSuccess} />
      <Button isIcon isDisabled={isSuccess}>
        {!isLoading ? '+' : <Loader fitContent />}
      </Button>
      <Button isIcon onClick={copyUserPasses} isDisabled={!isSuccess}>
        {!isCopied ? 'Kopiuj' : 'Gotowe!'}
      </Button>
    </PeopleWrapper>
  );
};

export default React.memo(UserRecord);
