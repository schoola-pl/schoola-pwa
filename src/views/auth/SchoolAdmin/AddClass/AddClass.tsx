import { ClassHeading, Grid, Heading, InnerWrapper, Label, PeopleCard, PeopleForm, ScrollBar, Select, StyledForm, Wrapper } from './AddClass.styles';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import restore from 'assets/icons/restore.png';
import { useClass } from 'hooks/useClass';
import UserRecord from '../../../../components/molecules/UserRecord/UserRecord';
import Loader from 'components/atoms/Loader/Loader';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useUser } from 'hooks/useUser';
import { storeRoot, useGetUsersCountQuery } from 'store';
import { useSelector } from 'react-redux';

const AddClass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const { addClassProtocol, clearStates, isCreated, restoreClass, className, users, isLoading } = useClass();
  const { deleteUsers } = useUser();
  const { level } = useParams();
  const [addedUsers, setAddedUser] = useState<number[]>([]);
  const user = useSelector((store: storeRoot) => store.user);
  const usersCount = useGetUsersCountQuery({
    schoolId: user?.schoolId
  });

  const extendedRestoreClass = () => {
    restoreClass();
    deleteUsers(addedUsers, usersCount.data.data[0].attributes.totalUsers);
  };

  return (
    <Wrapper>
      <Heading>Dodaj klasę</Heading>
      <Grid>
        <InnerWrapper>
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
        </InnerWrapper>
        <PeopleCard>
          <ClassHeading>{className}</ClassHeading>
          <ScrollBar>
            {users.length > 0 ? (
              <PeopleForm>
                {users.map((user, i) => (
                  <UserRecord key={i} index={i} setAddedUser={setAddedUser} />
                ))}
              </PeopleForm>
            ) : (
              <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>Aby zarządzać użytkownikami, utwórz najpierw klasę po lewej stronie.</p>
            )}
          </ScrollBar>
        </PeopleCard>
      </Grid>
    </Wrapper>
  );
};

export default AddClass;
