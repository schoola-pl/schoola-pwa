import GoodPasswordRules from 'components/molecules/GoodPasswordRules/GoodPasswordRules';
import { CardHeading, Card, PasswordForm, Label, StyledInput, SubmitButton } from './ChangePassword.styles';

const ChangePassword = () => (
  <div>
    <CardHeading>Zmień hasło</CardHeading>
    <Card>
      <GoodPasswordRules />
      <PasswordForm>
        <Label htmlFor="oldPassword">Stare hasło</Label>
        <StyledInput name="oldPassword" />
        <Label htmlFor="currentPassword">Obecne hasło</Label>
        <StyledInput name="currentPassword" />
        <Label htmlFor="newPassword">Nowe hasło</Label>
        <StyledInput name="newPassword" />
      </PasswordForm>
      <SubmitButton>Zatwierdź</SubmitButton>
    </Card>
  </div>
);

export default ChangePassword;
