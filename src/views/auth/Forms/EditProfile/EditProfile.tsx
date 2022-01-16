import { CardHeading, Card, EditProfileForm, Label, StyledInput, SubmitButton } from './EditProfile.styles';

const EditProfile = () => (
  <div>
    <CardHeading>Edytuj profil</CardHeading>
    <Card>
      <EditProfileForm>
        <Label>E-mail</Label>
        <StyledInput />
        <Label>Imię</Label>
        <StyledInput />
        <Label>Nazwisko</Label>
        <StyledInput />
        <Label>Data urodzenia</Label>
        <StyledInput type="date" />
      </EditProfileForm>
      <SubmitButton>Zatwierdź</SubmitButton>
    </Card>
  </div>
);

export default EditProfile;
