import { InputWrapper, SubmitButton, Wrapper } from '../Settings.styles';
import { useForm } from 'react-hook-form';
import ErrorParagraph from 'components/atoms/ErrorParagraph/ErrorParagraph';
import { useUser } from 'hooks/useUser';
import { useState } from 'react';
import Loader from 'components/atoms/Loader/Loader';

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm();

  const oldPass = watch('oldPass');
  const newPass = watch('newPass');
  const confirmPass = watch('confirmPass');

  const { checkPassword } = useUser();

  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleChangePassword = async ({ oldPass, newPass, confirmPass }: { oldPass: string; newPass: string; confirmPass: string }) => {
    setError('');
    setLoading(true);
    if (newPass !== confirmPass) {
      setError('Nowe hasło nie jest takie samo w dwóch polach!');
      setLoading(false);
      return;
    }
    const isValid = await checkPassword(oldPass);
    if (!isValid) {
      setError('Stare hasło jest nieprawidłowe!');
      setLoading(false);
      return;
    }
    reset();
    setLoading(false);
  };

  return (
    <Wrapper>
      <h1>Zmień hasło</h1>
      <form onSubmit={handleSubmit(handleChangePassword)}>
        <InputWrapper>
          <label htmlFor="old-pass">Obecne hasło</label>
          <input type="password" id="old-pass" {...register('oldPass', { required: true })} />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="new-pass">Nowe hasło</label>
          <input
            type="password"
            id="new-pass"
            {...register('newPass', {
              required: true,
              pattern: /(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g
            })}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="new-pass-verify">Potwierdź nowe hasło</label>
          <input type="password" id="new-pass-verify" {...register('confirmPass', { required: true })} />
        </InputWrapper>
        <SubmitButton isDisabled={!oldPass || !newPass || !confirmPass}>
          {!isLoading ? (
            'Zmień'
          ) : (
            <>
              Zmienianie hasła... <Loader style={{ marginLeft: '1rem' }} fitContent />
            </>
          )}
        </SubmitButton>
        {errors.newPass && (
          <ErrorParagraph style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            Sprawdź, czy nowe hasło ma: 8 znaków, dużą literę i znak specjalny!
          </ErrorParagraph>
        )}
        {error && <ErrorParagraph style={{ textAlign: 'center', marginTop: '0.5rem' }}>{error}</ErrorParagraph>}
      </form>
    </Wrapper>
  );
};

export default ChangePassword;
