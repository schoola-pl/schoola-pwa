import Input from '../../atoms/Input/Input';
import { PeopleWrapper, Select } from './UserRecord.styles';
import Button from '../../atoms/Button/Button';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import Loader from 'components/atoms/Loader/Loader';
import { useUser } from 'hooks/useUser';
import { copy } from 'helpers/copy';

interface props {
  index: number;
  // eslint-ignore-next-line @typescript-eslint/no-explicit-any
  setAddedUser: any;
}

const UserRecord: React.FC<props> = ({ index: i, setAddedUser }) => {
  const {
    register: registerUser,
    formState: { errors },
    handleSubmit: handleSaveUser
  } = useForm();
  const [createdUser, setNewUser] = useState<Partial<{ id: number; login: string; name: string; password: string }>>({});
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { addNewUser } = useUser();

  const saveUser = async (tempUser: { name: string; birthday: string; TextRole: string; first_name: string; last_name: string }) => {
    setIsLoading(true);
    const newUser = await addNewUser(tempUser);
    if (newUser) {
      setIsSuccess(true);
      setNewUser(newUser);
      setAddedUser((prev: number[]) => [...prev, newUser.id]);
    }
    setIsLoading(false);
  };

  const copyUserPasses = () => {
    if (createdUser) {
      const { login, password, name } = createdUser;
      copy(`Użytkownik: ${name || 'błąd'} | Login: ${login || 'błąd'} | Hasło: ${password || 'błąd'}`, () => {
        setIsCopied(true);
        setInterval(() => {
          setIsCopied(false);
        }, 3000);
      });
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
        <Select {...registerUser('TextRole', { required: true })} disabled={isSuccess}>
          <option value="Student">Uczeń</option>
          <option value="Moderator">Samorząd Uczniowski</option>
        </Select>
        <Input type="date" placeholder="urodziny" error={errors.birthday} {...registerUser('birthday', { required: true })} disabled={isSuccess} />
        <Button isIcon isDisabled={isSuccess}>
          {!isLoading ? '+' : <Loader fitContent />}
        </Button>
      </PeopleWrapper>
      <Button isIcon onClick={copyUserPasses} isDisabled={!isSuccess}>
        {!isCopied ? 'Kopiuj' : 'Gotowe!'}
      </Button>
    </div>
  );
};

export default React.memo(UserRecord);
