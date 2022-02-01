import { FormWrapper, Form, Label, StyledInput, LawWrapper, LawCheckbox, LawLabel, Statute, PrivacyPolicy } from './DataPage.styles';
import FirstLoginTemplate from 'components/templates/FirstLoginTemplate/FirstLoginTemplate';
import GPR from 'components/molecules/GPR/GPR';

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
        <div>
          <LawWrapper>
            <LawCheckbox name="law-stuff" type="checkbox" />
            <LawLabel htmlFor="law-stuff">
              Akceptuję <Statute href="#" /> i <PrivacyPolicy href="#" />
            </LawLabel>
          </LawWrapper>
        </div>
      </Form>
    </FormWrapper>
  </FirstLoginTemplate>
);

export default DataPage;
