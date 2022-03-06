import { useParams } from 'react-router';
import { useClass } from 'hooks/useClass';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { storeRoot, useGetUsersCountQuery } from 'store';
import { useUser } from 'hooks/useUser';
import React from 'react';
import { Label, StyledForm, Wrapper } from './AddClassForm.styles';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import restore from 'assets/icons/restore.png';
import { Select } from 'views/SchoolAdmin/AddClass/AddClass.styles';
import Loader from 'components/atoms/Loader/Loader';

interface props {
  addedUsers: number[];
  setAddedUser: React.Dispatch<React.SetStateAction<number[]>>;
}

const AddClassForm: React.FC<props> = ({ addedUsers, setAddedUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const { level } = useParams();
  const { addClassProtocol, restoreClass, clearStates, isCreated, isLoading } = useClass();
  const user = useSelector((store: storeRoot) => store.user);
  const usersCount = useGetUsersCountQuery({
    schoolId: user?.schoolId || null
  });
  const { deleteUsers } = useUser();

  const extendedRestoreClass = () => {
    if (usersCount.data?.data[0]) {
      restoreClass();
      deleteUsers(addedUsers, usersCount.data?.data[0].attributes.totalUsers);
      setAddedUser([]);
    }
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit(addClassProtocol)}>
        <Label htmlFor="name">Nazwa klasy</Label>
        <Input
          type="text"
          id="name"
          placeholder="Nazwa klasy (np. A)"
          disabled={isCreated}
          {...register('className', { required: true, maxLength: 2, pattern: /^[A-Z]+$/g })}
          error={errors.className}
        />
        <Select disabled={isCreated} {...register('classLevel', { required: true })}>
          <option value="" selected={!level || (level !== '1' && level !== '2' && level !== '3' && level !== '4')} disabled hidden>
            Wybierz rok klasy
          </option>
          <option value="1" selected={level === '1'}>
            Pierwsze klasy
          </option>
          <option value="2" selected={level === '2'}>
            Drugie klasy
          </option>
          <option value="3" selected={level === '3'}>
            Trzecie klasy
          </option>
          <option value="4" selected={level === '4'}>
            Czwarte klasy
          </option>
        </Select>
        <Label htmlFor="amountOfStudents">Ilość osób w klasie</Label>
        <Input
          type="number"
          style={{ marginBottom: '2rem' }}
          id="amountOfStudents"
          placeholder="Podaj liczbę"
          disabled={isCreated}
          min={0}
          {...register('usersCount', { required: true, min: 1 })}
          error={errors.usersCount}
        />
        <div style={{ display: 'flex' }}>
          <Button isDisabled={isCreated}>
            {!isCreated && !isLoading ? (
              'Zatwierdź'
            ) : isLoading ? (
              <>
                Tworzenie...
                <Loader style={{ marginLeft: '1rem' }} fitContent />
              </>
            ) : (
              'Utworzono!'
            )}
          </Button>
          {isCreated && (
            <Button style={{ marginLeft: '1rem' }} onClick={extendedRestoreClass} isIcon isDanger>
              <img src={restore} alt={'Restore arrows'} />
            </Button>
          )}
        </div>
        {isCreated && (
          <Button style={{ marginTop: '1rem' }} onClick={() => clearStates(reset)}>
            Dodaj kolejną klasę
          </Button>
        )}
      </StyledForm>
    </Wrapper>
  );
};

export default AddClassForm;
