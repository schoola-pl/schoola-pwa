import { Card, CardHeading, EditProfileForm, Label, StyledInput, SubmitButton } from './EditProfile.styles';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';

const EditProfile = () => {
  const user = useSelector((state: storeRoot) => state.user);

  return (
    <div>
      <CardHeading>Edytuj profil</CardHeading>
      <Card>
        <EditProfileForm>
          <Label>E-mail</Label>
          <StyledInput placeholder={user?.email || 'Wczytywanie...'} />
          <Label>Imię</Label>
          <StyledInput placeholder={user?.first_name || 'Wczytywanie...'} />
          <Label>Nazwisko</Label>
          <StyledInput placeholder={user?.last_name || 'Wczytywanie...'} />
          <Label>
            Data urodzenia (aktualna: <i>{user?.Birthday || 'Wczytywanie...'}</i>)
          </Label>
          <StyledInput type="date" />
        </EditProfileForm>
        <SubmitButton>Zatwierdź</SubmitButton>
      </Card>
    </div>
  );
};

export default EditProfile;
