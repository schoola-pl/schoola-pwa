import {
  ClassHeading,
  Grid,
  Heading,
  InnerWrapper,
  Label,
  PeopleCard,
  PeopleForm,
  PeopleWrapper,
  ScrollBar,
  Select,
  StyledForm,
  Wrapper
} from './AddClass.styles';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import restore from 'assets/icons/restore.png';

const AddClass = () => {
  const [users, setUsers] = useState<unknown[]>([]);
  const [className, setClassName] = useState('Nie utworzono klasy.');
  const [isCreated, setIsCreated] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const addClassProtocol = ({ classLevel, className, usersCount }: { classLevel: number; className: string; usersCount: string }) => {
    const name = `Klasa ${classLevel}${className}`;
    setClassName(name);
    const emptyUsers = new Array(parseInt(usersCount)).fill({});
    setUsers(emptyUsers);
    setIsCreated(true);
  };

  const restoreClass = () => {
    setClassName('Nie utworzono klasy.');
    setUsers([]);
    setIsCreated(false);
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
                  <PeopleWrapper>
                    <h1>{i + 1}.</h1>
                    <Input type="text" name="name" placeholder="Imię i nazwisko" />
                    <Select>
                      <option value="">Uczeń</option>
                      <option value="">Samorząd uczniowski</option>
                      <option value="">Administrator</option>
                    </Select>
                    <Input type="date" name="name" placeholder="urodziny" />
                  </PeopleWrapper>
                ))}
                <Button style={{ marginTop: '1.5rem' }}>Zatwierdź</Button>
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
