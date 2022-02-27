import GoodPasswordRules from 'components/molecules/GoodPasswordRules/GoodPasswordRules';
import { Card, CardHeading, Label, PasswordForm, StyledInput, SubmitButton } from './ChangePassword.styles';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { useUser } from 'hooks/useUser';
import ErrorParagraph from 'components/atoms/ErrorParagraph/ErrorParagraph';
import { useNavigate } from 'react-router';

interface props {
  isRestore?: string;
}

const ChangePassword: React.FC<props> = ({ isRestore }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
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
            error={isSame || errors.newPassword}
            {...register('newPassword', {
              required: true,
              pattern: /(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g
            })}
          />
          {errors.newPassword && (
            <ErrorParagraph style={{ marginLeft: '2rem', marginTop: '1rem' }}>Hasło nie spełnia warunków dobrego hasła!</ErrorParagraph>
          )}
          <Label htmlFor="newPassword">Powtórz nowe hasło</Label>
          <StyledInput type="password" error={isSame} {...register('newPasswordVerify', { required: true })} />
          {isSame && <ErrorParagraph style={{ marginLeft: '2rem', marginTop: '1rem' }}>Hasła nie są takie same</ErrorParagraph>}
        </PasswordForm>
        <SubmitButton isDanger={isError} isDisabled={isLoading || isSuccess}>
          {!isSuccess ? (!isError ? (!isLoading ? 'Zmień hasło' : 'Zmienianie...') : 'Podano zły token!') : 'Zmieniono hasło!'}
        </SubmitButton>
      </Card>
    </div>
  );
};

export default ChangePassword;
