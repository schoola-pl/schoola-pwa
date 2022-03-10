import { InputWrapper, SubmitButton, Wrapper } from '../Settings.styles';
import { storeRoot } from 'store';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useUser } from 'hooks/useUser';
import ErrorParagraph from 'components/atoms/ErrorParagraph/ErrorParagraph';

const ChangeEmail = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const emailField = watch('email');

  const { updateSettings } = useUser();

  const handleChangeEmail = ({ email }: { email: string }) => {
    updateSettings({ email });
    reset();
  };

  return (
    <Wrapper email={true}>
      <h1>Zmień e-mail</h1>
      <form onSubmit={handleSubmit(handleChangeEmail)}>
        <InputWrapper>
          <label htmlFor="new-email">Nowy adres</label>
          <input
            type="e-mail"
            id="new-email"
            placeholder={user?.email || 'brak'}
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
            })}
          />
        </InputWrapper>
        <SubmitButton isDisabled={!emailField} email={true}>
          Zmień
        </SubmitButton>
        {errors.email && <ErrorParagraph style={{ marginTop: '0.5rem' }}>Podaj poprawny adres e-mail</ErrorParagraph>}
      </form>
    </Wrapper>
  );
};

export default ChangeEmail;
