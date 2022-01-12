import AdminTemplate from 'components/templates/AdminTemplate/AdminTemplate';
import PeopleOptions from 'components/atoms/PeopleOptions/PeopleOptions';
import {
  ClassHeading,
  Grid,
  Heading,
  InnerWrapper,
  Label,
  PeopleCard,
  PeopleForm,
  PeopleSelect,
  PeopleWrapper,
  Select,
  StyledForm,
  Wrapper
} from './AddClass.styles';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const AddClass = () => {
  return (
    <AdminTemplate>
      <Wrapper>
        <Heading>Dodaj klasę</Heading>
        <Grid>
          <InnerWrapper>
            <StyledForm>
              <Label htmlFor="name">Nazwa klasy</Label>
              <Input type="text" id="name" name="name" placeholder="Nazwa klasy (np. A)" />
              <Select>
                <option value="1">Pierwsze klasy</option>
                <option value="2">Drugie klasy</option>
                <option value="3">Trzecie klasy</option>
                <option value="4">Czwarte klasy</option>
              </Select>
              <Label htmlFor="amountOfStudents">Ilość osób w klasie</Label>
              <PeopleSelect id="amountOfStudents">
                <PeopleOptions />
              </PeopleSelect>
              <Button>Zatwierdź</Button>
            </StyledForm>
          </InnerWrapper>
          <PeopleCard>
            <ClassHeading>Klasa 1A</ClassHeading>
            <PeopleForm>
              <PeopleWrapper>
                <h1>1.</h1>
                <Input type="text" name="name" placeholder="Imię i nazwisko" />
                <Select>
                  <option value="">Uczeń</option>
                  <option value="">Samorząd uczniowski</option>
                  <option value="">Administrator</option>
                </Select>
                <Input type="date" name="name" placeholder="urodziny" />
              </PeopleWrapper>
              <PeopleWrapper>
                <h1>1.</h1>
                <Input type="text" name="name" placeholder="Imię i nazwisko" />
                <Select>
                  <option value="">Uczeń</option>
                  <option value="">Samorząd uczniowski</option>
                  <option value="">Administrator</option>
                </Select>
                <Input type="date" name="name" placeholder="urodziny" />
              </PeopleWrapper>
              <Button style={{ marginTop: '1.5rem' }}>Zatwierdź</Button>
            </PeopleForm>
          </PeopleCard>
        </Grid>
      </Wrapper>
    </AdminTemplate>
  );
};

export default AddClass;
