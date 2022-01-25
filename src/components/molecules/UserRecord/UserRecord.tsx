import Input from '../../atoms/Input/Input';
import { PeopleWrapper, Select } from './UserRecord.styles';
import Button from '../../atoms/Button/Button';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import Loader from 'components/atoms/Loader/Loader';
import { useUser } from 'hooks/useUser';

interface props {
  index: number;
}

const UserRecord: React.FC<props> = ({ index: i }) => {
  const {
    register: registerUser,
    formState: { errors },
    handleSubmit: handleSaveUser
  } = useForm();
  const [createdUser, setNewUser] = useState<Partial<{ login: string; name: string; password: string }>>({});
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { addNewUser } = useUser();

  const saveUser = (tempUser: { name: string; birthday: string; TextRole: string; first_name: string; last_name: string }) => {
    setIsLoading(true);
    const newUser = addNewUser(tempUser);
    if (newUser) {
      setIsSuccess(true);
      setNewUser(newUser);
    }
    setIsLoading(false);
  };

  const copyUserPasses = () => {
    if (createdUser) {
      const cb = navigator.clipboard;
      const { login, password, name } = createdUser;
      cb.writeText(`Użytkownik: ${name || 'błąd'} | Login: ${login || 'błąd'} | Hasło: ${password || 'błąd'}`).then(() => {
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
        <Select {...registerUser('role', { required: true })} disabled={isSuccess}>
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
