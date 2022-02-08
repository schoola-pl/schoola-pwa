import { Form, FormWrapper, Label, LawCheckbox, LawLabel, LawWrapper, PrivacyPolicy, Statute, StyledInput } from './DataPage.styles';
import ErrorParagraph from 'components/atoms/ErrorParagraph/ErrorParagraph';
import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useUser } from 'hooks/useUser';
import Button from 'components/atoms/Button/Button';

interface props {
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataPage: React.FC<props> = ({ setReadyState }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [isSame, setIsSame] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { resetPassword, updateSettings } = useUser();

  useEffect(() => {
    setReadyState(false);
  }, []);

  const handleChangeData = ({ newEmail, newPassword, newPasswordVerify }: { [key: string]: string }) => {
    if (isSuccess) return;
    if (newPassword !== newPasswordVerify) return setIsSame(true);
    setIsSame(false);
    resetPassword(newPassword);
    updateSettings({ email: newEmail });
    setIsSuccess(true);
    setReadyState(true);
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(handleChangeData)}>
        <div>
          <Label htmlFor="e-mail">E-mail</Label>
          <StyledInput
            id="e-mail"
            placeholder="example@email.com"
            error={errors.newEmail}
            type="email"
            {...register('newEmail', {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
            })}
            disabled={isSuccess}
          />
          {errors.newEmail && <ErrorParagraph style={{ marginLeft: '2rem', marginTop: '1rem' }}>E-mail nie jest poprawny!</ErrorParagraph>}
        </div>
        <div>
          <Label htmlFor="newPassword">Nowe hasło</Label>
          <StyledInput
            type="password"
            id="newPassword"
            error={isSame || errors.newPassword}
            {...register('newPassword', {
              required: true,
              pattern: /(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g
            })}
            disabled={isSuccess}
          />
          {errors.newPassword && (
            <ErrorParagraph style={{ marginLeft: '2rem', marginTop: '1rem' }}>
              Brakuje tutaj czegoś... pamiętaj o dużej literze, długości 8 znaków, liczbie i znaku specjalnym!
            </ErrorParagraph>
          )}
        </div>
        <div>
          <Label htmlFor="newPasswordVerify">Powtórz nowe hasło</Label>
          <StyledInput
            id="newPasswordVerify"
            type="password"
            error={isSame}
            {...register('newPasswordVerify', { required: true })}
            disabled={isSuccess}
          />
          {isSame && <ErrorParagraph style={{ marginLeft: '2rem', marginTop: '1rem' }}>Hasła nie są takie same</ErrorParagraph>}
        </div>
        <div>
          <LawWrapper>
            <LawCheckbox type="checkbox" {...register('lawCheckbox', { required: true })} disabled={isSuccess} />
            <LawLabel htmlFor="law-stuff">
              Akceptuję <Statute href="#" /> i <PrivacyPolicy href="#" />
            </LawLabel>
          </LawWrapper>
          {errors.lawCheckbox && (
            <ErrorParagraph style={{ marginLeft: '1rem' }}>Musisz zaakceptować regulamin i politykę prywatności!</ErrorParagraph>
          )}
        </div>
        <Button
          style={{
            width: '100%',
            marginTop: '1rem'
          }}
          isDisabled={isSuccess}
        >
          {!isSuccess ? 'Zmień dane' : 'Zmieniono dane!'}
        </Button>
      </Form>
    </FormWrapper>
  );
};
export default DataPage;
