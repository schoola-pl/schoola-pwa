import AdminTemplate from 'components/templates/AdminTemplate/AdminTemplate';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import PeopleOptions from 'components/atoms/PeopleOptions/PeopleOptions';

const Wrapper = styled.div`
  padding: 1rem;
  margin: 3rem 3rem 0;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  border-bottom: 3px solid #eceff7;
  padding-bottom: 1rem;
`;

const Select = styled.select`
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  resize: none;
  border: 2px solid ${({ theme }) => theme.colors.selectedItemGrey};
  transition: border 0.3s linear;
  margin: 2rem 0 2rem 0;
  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.accentGreen};
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  width: 30rem;
  margin-top: 3rem;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const PeopleSelect = styled(Select)`
  transform: translateY(-20%);
`;

const PeopleCard = styled.div`
  width: 79rem;
  height: 80%;
  background-color: white;
  margin-right: 12rem;
  border-radius: 1rem;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const InnerWrapper = styled.div`
  margin-top: -2rem;
  border-right: 2px solid #eceff7;
`;

const ClassHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  border-bottom: 3px solid ${({ theme }) => theme.colors.accentGreen};
  padding: 1rem;
`;

const PeopleForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const PeopleWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-height: 8rem;
  align-items: center;
  background-color: #f7f8fa;
  border-radius: 1rem;
  margin: 1rem;
  width: 95%;
`;

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
