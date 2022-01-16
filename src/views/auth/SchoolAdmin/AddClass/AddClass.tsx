import { ClassHeading, Grid, Heading, InnerWrapper, Label, PeopleCard, PeopleForm, ScrollBar, Select, StyledForm, Wrapper } from './AddClass.styles';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import restore from 'assets/icons/restore.png';
import { useClass } from '../../../../hooks/useClass';
import UserRecord from '../../../../components/molecules/UserRecord/UserRecord';

const AddClass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const { addClassProtocol, restoreClass, isCreated, className, users } = useClass();

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
              {...register('className', { required: true, maxLength: 3 })}
              error={errors.className}
            />
            <Select disabled={isCreated} {...register('classLevel', { required: true })}>
              <option value="1">Pierwsze klasy</option>
              <option value="2">Drugie klasy</option>
              <option value="3">Trzecie klasy</option>
              <option value="4">Czwarte klasy</option>
            </Select>
            <Label htmlFor="amountOfStudents">Ilość osób w klasie</Label>
            <Input
              type="number"
              style={{ marginBottom: '2rem' }}
              id="amountOfStudents"
              placeholder="Podaj liczbę"
              disabled={isCreated}
              {...register('usersCount', { required: true })}
              error={errors.usersCount}
            />
            <div style={{ display: 'flex' }}>
              <Button isDisabled={isCreated}>{!isCreated ? 'Zatwierdź' : 'Utworzono!'}</Button>
              {isCreated && (
                <Button style={{ marginLeft: '1rem' }} onClick={restoreClass} isIcon>
                  <img src={restore} alt={'Restore arrows'} />
                </Button>
              )}
            </div>
          </StyledForm>
        </InnerWrapper>
        <PeopleCard>
          <ClassHeading>{className}</ClassHeading>
          <ScrollBar>
            {users.length > 0 ? (
              <PeopleForm>
                {users.map((user, i) => (
                  <UserRecord key={i} index={i} />
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
