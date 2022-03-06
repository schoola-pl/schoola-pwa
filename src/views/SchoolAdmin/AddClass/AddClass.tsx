import { ClassHeading, Grid, Heading, PeopleCard, PeopleForm, ScrollBar, Wrapper } from './AddClass.styles';
import { useClass } from 'hooks/useClass';
import UserRecord from '../../../components/molecules/UserRecord/UserRecord';
import { useState } from 'react';
import AddClassForm from 'views/Forms/AddClassForm/AddClassForm';

const AddClass = () => {
  const { className, users } = useClass();
  const [addedUsers, setAddedUser] = useState<number[]>([]);

  return (
    <Wrapper>
      <Heading>Dodaj klasę</Heading>
      <Grid>
        <AddClassForm addedUsers={addedUsers} setAddedUser={setAddedUser} />
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
