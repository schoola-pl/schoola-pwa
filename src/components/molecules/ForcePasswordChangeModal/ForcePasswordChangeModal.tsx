import Button from 'components/atoms/Button/Button';
import Info from 'components/atoms/Info/Info';
import Input from 'components/atoms/Input/Input';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Dash from 'components/atoms/Dash/Dash';
import ErrorParagraph from 'components/atoms/ErrorParagraph/ErrorParagraph';
import Loader from 'components/atoms/Loader/Loader';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

const StyledInfo = styled(Info)`
  margin-top: 0.5rem;
`;
const Form = styled.form`
  padding: 1rem;
  margin-block: 2.5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

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

  const handleChangePassword = async ({ password, password_verify, ...rest }: { [key: string]: string }) => {
    if (password !== password_verify) setError('Hasła nie są takie same!');
    setLoading(true);
    await resetMethod(password, { ...rest });
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
        {requiredAttributes.map((attribute, index) => (
          <Input key={index} type="text" placeholder={`${attribute}`} {...register(`${attribute}`, { required: true })} />
        ))}
        <Button
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
