import AdminTemplate from 'components/templates/AdminTemplate/AdminTemplate';
import PeopleOptions from 'components/atoms/PeopleOptions/PeopleOptions';
import {
  Wrapper,
  Heading,
  Grid,
  InnerWrapper,
  StyledForm,
  Select,
  PeopleSelect,
  Label,
  PeopleCard,
  PeopleWrapper,
  ClassHeading,
  PeopleForm
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
              <Input type="text" name="name" placeholder="przykład: 1A" />
              <Select name="" id="">
                <option value="">Pierwsze klasy</option>
                <option value="">Drugie klasy</option>
                <option value="">Trzecie klasy</option>
                <option value="">Czwarte klasy</option>
              </Select>
              <Label htmlFor="amountOfStudents">Ilość osób w klasie</Label>
              <PeopleSelect name="amountOfStudents" id="">
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
              <Button>Zatwierdź</Button>
            </PeopleForm>
          </PeopleCard>
        </Grid>
      </Wrapper>
    </AdminTemplate>
  );
};

export default AddClass;
