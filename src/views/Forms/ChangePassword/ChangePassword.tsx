import GoodPasswordRules from 'components/molecules/GoodPasswordRules/GoodPasswordRules';
import { Card, CardHeading, Label, PasswordForm, StyledInput, SubmitButton } from './ChangePassword.styles';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { useUser } from 'hooks/useUser';
import ErrorParagraph from 'components/atoms/ErrorParagraph/ErrorParagraph';
import { useNavigate } from 'react-router';
import Loader from 'components/atoms/Loader/Loader';

interface props {
  isRestore?: string;
}

const ChangePassword: React.FC<props> = ({ isRestore }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const pass1Field = watch('newPassword');
  const pass2Field = watch('newPasswordVerify');

  const [isSame, setIsSame] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { resetPassword } = useUser();
  const navigate = useNavigate();

  const handleChangePassword = async ({ newPassword, newPasswordVerify }: { [key: string]: string }) => {
    try {
      setError(false);
      if (newPassword !== newPasswordVerify) return setIsSame(true);
      setIsSame(false);
      setIsLoading(true);
      await resetPassword(newPassword, isRestore);
      setIsLoading(false);
      setIsSuccess(true);
      if (isRestore) navigate('/login');
      reset();
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div>
      {!isRestore && <CardHeading>Zmień hasło</CardHeading>}
      <Card as="form" onSubmit={handleSubmit(handleChangePassword)} isRestore={!!isRestore}>
        <GoodPasswordRules />
        <PasswordForm>
          <Label htmlFor="currentPassword">Nowe hasło</Label>
          <StyledInput
            type="password"
            id="currentPassword"
            error={isSame || errors.newPassword}
            {...register('newPassword', {
              required: true,
              pattern: /(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g
            })}
          />
          <Label htmlFor="newPassword">Powtórz nowe hasło</Label>
          <StyledInput id="newPassword" type="password" {...register('newPasswordVerify', { required: true })} />
        </PasswordForm>
        <SubmitButton isDisabled={isLoading || !pass1Field || !pass2Field}>
          {!isLoading && !isSuccess ? (
            'Zmień hasło'
          ) : isSuccess ? (
            'Zmieniono hasło!'
          ) : isError && isRestore ? (
            'Podany zły token!'
          ) : (
            <>
              Zmienianie danych... <Loader style={{ marginLeft: '1rem' }} fitContent />
            </>
          )}
        </SubmitButton>
        {errors.newPassword && <ErrorParagraph style={{ marginTop: '0.5rem' }}>Hasło nie spełnia warunków dobrego hasła!</ErrorParagraph>}
        {isSame && <ErrorParagraph style={{ marginTop: '0.5rem' }}>Hasła nie są takie same</ErrorParagraph>}
      </Card>
    </div>
  );
};

export default ChangePassword;
