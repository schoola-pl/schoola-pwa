import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Dash from 'components/atoms/Dash/Dash';
import ErrorParagraph from 'components/atoms/ErrorParagraph/ErrorParagraph';
import Loader from 'components/atoms/Loader/Loader';
import { upperFirstLetter } from '../../../helpers/text';
import { Form, StyledInfo, Wrapper } from './ForcePasswordChangeModal.styles';

interface props {
  useGetPasswordResetAttributes: () => {
    resetMethod: (newPassword: string, requiredAttributes: any) => void;
    requiredAttributes: string[];
  };
}

const ForcePasswordChangeModal: React.FC<props> = ({ useGetPasswordResetAttributes }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [isError, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const { resetMethod, requiredAttributes } = useGetPasswordResetAttributes();

  const handleChangePassword = async ({ password, password_verify, name }: { [key: string]: string }) => {
    if (password !== password_verify) setError('Hasła nie są takie same!');
    let requiredAttributes = {};
    if (name) {
      // Prepare requiredAttributes (object) to send
      const first_name = upperFirstLetter(name.split(' ')[0]);
      const last_name = upperFirstLetter(name.split(' ')[1]);
      requiredAttributes = {
        name: `${first_name} ${last_name}`,
        given_name: first_name,
        family_name: last_name
      };
    }
    setLoading(true);
    // Send new password to server (with another attributes)
    await resetMethod(password, { ...requiredAttributes });
    setLoading(false);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(handleChangePassword)}>
        <Input
          type="password"
          placeholder="Nowe hasło"
          {...register('password', {
            required: true,
            pattern: /(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g
          })}
        />
        <Input type="password" placeholder="Powtórz hasło" {...register('password_verify', { required: true })} />
        {isError && <ErrorParagraph style={{ width: '100%' }}>{isError}</ErrorParagraph>}
        {errors.password && (
          <ErrorParagraph style={{ width: '100%' }}>
            Hasło nie spełnia warunków dobrego hasła! (min. długość 8 znaków, znak specjalny i cyfra, małe i wielkie litery)
          </ErrorParagraph>
        )}
        {requiredAttributes.length > 0 && <Dash style={{ marginTop: '1rem', width: '90%' }} />}
        {requiredAttributes.includes('name') && (
          <Input
            type="text"
            placeholder="Imię i nazwisko"
            {...register('name', {
              required: true,
              pattern: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,} [a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,}$/g
            })}
          />
        )}
        {errors.name && <ErrorParagraph style={{ width: '100%' }}>Format imienia i nazwiska jest nieprawidłowy!</ErrorParagraph>}
        <Button
          type="submit"
          isDisabled={isLoading}
          style={{
            width: '100%',
            marginTop: '2rem'
          }}
        >
          {!isLoading ? (
            requiredAttributes.length > 0 ? (
              'Uzupełnij dane'
            ) : (
              'Zmień hasło'
            )
          ) : (
            <>
              Zmieniam... <Loader style={{ marginLeft: '1.5rem' }} fitContent />
            </>
          )}
        </Button>
      </Form>
      <StyledInfo>
        Jako iż twoje konto zostało dodane przez administratora, chcemy abyś ustawił sobie własne hasło
        {requiredAttributes.length > 0 && ', a także uzupełnił brakujące informacje'}!
      </StyledInfo>
    </Wrapper>
  );
};

export default ForcePasswordChangeModal;
