import { Card, CardHeading, EditProfileForm, Label, StyledInput, SubmitButton } from './EditProfile.styles';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';
import { useForm } from 'react-hook-form';
import { settingsType } from 'types/school';

const EditProfile = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleChangeSettings = (settings: settingsType) => {
    console.log(settings);
  };

  return (
    <div>
      <CardHeading>Edytuj profil</CardHeading>
      <Card as="form" onSubmit={handleSubmit(handleChangeSettings)}>
        <EditProfileForm>
          <Label>E-mail</Label>
          <StyledInput
            placeholder={user?.email || 'Wczytywanie...'}
            error={errors.email}
            {...register('email', {
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
            })}
          />
          <Label>Imię</Label>
          <StyledInput placeholder={user?.first_name || 'Wczytywanie...'} {...register('first_name')} />
          <Label>Nazwisko</Label>
          <StyledInput placeholder={user?.last_name || 'Wczytywanie...'} {...register('last_name')} />
          <Label>
            Data urodzenia (aktualna: <i>{user?.Birthday || 'Wczytywanie...'}</i>)
          </Label>
          <StyledInput type="date" {...register('Birthday')} />
        </EditProfileForm>
        <SubmitButton>Zatwierdź</SubmitButton>
      </Card>
    </div>
  );
};

export default EditProfile;
