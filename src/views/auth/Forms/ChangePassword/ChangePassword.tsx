import GoodPasswordRules from 'components/molecules/GoodPasswordRules/GoodPasswordRules';
import { Card, CardHeading, Label, PasswordForm, StyledInput, SubmitButton } from './ChangePassword.styles';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useUser } from 'hooks/useUser';

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [isSame, setIsSame] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { resetPassword } = useUser();

  const handleChangePassword = ({ newPassword, newPasswordVerify }: { [key: string]: string }) => {
    if (newPassword !== newPasswordVerify) return setIsSame(true);
    setIsSame(false);
    resetPassword(newPassword);
    setIsSuccess(true);
    reset();
  };

  return (
    <div>
      <CardHeading>Zmień hasło</CardHeading>
      <Card as="form" onSubmit={handleSubmit(handleChangePassword)}>
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
          <Label htmlFor="newPassword">Powtórz nowe hasło</Label>
          <StyledInput type="password" error={isSame} {...register('newPasswordVerify', { required: true })} />
        </PasswordForm>
        <SubmitButton>{!isSuccess ? 'Zmień hasło' : 'Zmieniono hasło!'}</SubmitButton>
      </Card>
    </div>
  );
};

export default ChangePassword;
