import { Card, CardHeading, EditProfileForm, Label, StyledInput, SubmitButton } from './EditProfile.styles';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';
import { useForm } from 'react-hook-form';
import { useUser } from 'hooks/useUser';
import { useState } from 'react';
import { authUser } from 'types/auth';
import ErrorParagraph from 'components/atoms/ErrorParagraph/ErrorParagraph';

const EditProfile = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const user = useSelector((state: storeRoot) => state.user);
  const { updateSettings, checkEmail } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const field1 = watch('email');
  const field2 = watch('first_name');
  const field3 = watch('last_name');
  const field4 = watch('Birthday');

  const handleChangeSettings = async (settings: Partial<authUser>) => {
    setError('');
    setLoading(true);
    const email = settings.email;

    if (!email) {
      updateSettings(settings);
      setIsSuccess(true);
      reset();
    } else {
      const isEmailNotTaken = await checkEmail(email);
      if (isEmailNotTaken) {
        updateSettings(settings);
        setIsSuccess(true);
        reset();
      } else setError('Podany adres jest już zajęty!');
    }
    setLoading(false);
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
                // eslint-disable-next-line
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
        <SubmitButton isDisabled={!field1 && !field2 && !field3 && !field4}>
          {!isSuccess ? (!isLoading ? 'Zmień dane' : 'Zmienianie danych...') : 'Zmieniono dane!'}
        </SubmitButton>
        {errors.email && <ErrorParagraph style={{ marginTop: '0.5rem' }}>Podaj poprawny adres email!</ErrorParagraph>}
        {error && <ErrorParagraph style={{ marginTop: '0.5rem' }}>{error}</ErrorParagraph>}
      </Card>
    </div>
  );
};

export default EditProfile;
