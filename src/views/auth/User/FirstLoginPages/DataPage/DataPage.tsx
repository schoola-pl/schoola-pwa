import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import FirstLoginTemplate from 'components/templates/FirstLoginTemplate/FirstLoginTemplate';
import GPR from 'components/molecules/GPR/GPR';

const FormWrapper = styled.div`
  height: 75%;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin-top: 3rem;
  border-radius: 2rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  width: 80%;
  margin-left: 5rem;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 1.5rem 0 1.5rem 0.5rem;
`;

export const StyledInput = styled(Input)`
  width: 90%;
  max-width: 40rem;
`;

const LawWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-row: repeat(1, 1fr);
  justify-items: center;
  margin-top: 2rem;
  width: 90%;
`;

const LawLabel = styled(Label)`
  grid-row: 1 / 1;
  grid-column: 2 /2;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const Statute = styled.a`
  text-decoration: none;
  &::after {
    content: 'regulamin';
    color: ${({ theme }) => theme.colors.accentBlue};
  }
`;

const PrivacyPolicy = styled.a`
  text-decoration: none;
  &::after {
    content: 'politykę prywatności';
    color: ${({ theme }) => theme.colors.accentBlue};
  }
`;

const LawCheckbox = styled.input`
  grid-column: 1 / 2;
  grid-row: 1 / 1;
  height: 1.5rem;
  width: 1.5rem;

  &:checked {
    background-color: ${({ theme }) => theme.colors.accentGreen};
  }
`;

const DataPage = () => (
  <FirstLoginTemplate>
    <FormWrapper>
      <GPR />
      <Form>
        <div>
          <Label htmlFor="e-mail">E-mail</Label>
          <StyledInput placeholder="example@email.com" type="email" />
        </div>
        <div>
          <Label htmlFor="password">Hasło</Label>
          <StyledInput placeholder="hasło" type="password" />
        </div>
        <div>
          <Label htmlFor="password">Potwierdz hasło</Label>
          <StyledInput placeholder="hasło" type="password" />
        </div>
        <LawWrapper>
          <LawCheckbox name="law-stuff" type="checkbox" />
          <LawLabel htmlFor="law-stuff">
            Akceptuję <Statute href="#" /> i <PrivacyPolicy href="#" />
          </LawLabel>
        </LawWrapper>
      </Form>
    </FormWrapper>
  </FirstLoginTemplate>
);

export default DataPage;
