import { Form, FormWrapper, Label, LawCheckbox, LawLabel, LawWrapper, PrivacyPolicy, Statute, StyledInput } from './DataPage.styles';
import ErrorParagraph from 'components/atoms/ErrorParagraph/ErrorParagraph';
import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import Button from 'components/atoms/Button/Button';
import { useAuth } from '../../../../hooks/useAuth';
import { useNotification } from '../../../../hooks/useNotification';
import { useModal } from '../../../../hooks/useModal';
import Loader from 'components/atoms/Loader/Loader';
import { theme } from '../../../../assets/styles/theme';
import VerifyAttrModal from '../../../../components/molecules/VerifyAttrModal/VerifyAttrModal';

interface props {
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataPage: React.FC<props> = ({ setReadyState }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [isLoading, setLoadingState] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const { currentUser, updateAttributes } = useAuth();
  const { notifyUser } = useNotification();
  const { openModal } = useModal();

  useEffect(() => {
    setReadyState(false);

    // If the user had already verified his email, we don't need to require it again
    const email = currentUser?.attributes.email;
    if (email) {
      // Notification about already existing email
      notifyUser({
        value: 'Jako iż twoje konto już posiada adres e-mail, możesz zaakceptować regulamin i ominąć ten krok, lub zmienić dane!',
        level: 1,
        type: 'info',
        options: {
          autoClose: 10000
        }
      });
    }
  }, []);

  const handleChangeData = async ({ email }: { [key: string]: string }) => {
    setError('');
    if (isSuccess) return;
    setLoadingState(true);
    // If there's new email, we need to verify it
    if (email) {
      // First of all - update attributes
      const { success: isSuccess, message } = await updateAttributes({
        attributes: {
          email
        }
      });
      // Next - verify email with modal
      openModal(<VerifyAttrModal attr={{ name: 'email', value: email }} />, 'Zweryfikuj adres e-mail');
      // If there's a success, let user go to the next step
      if (isSuccess) {
        setIsSuccess(true);
        setReadyState(true);
        // If there's an error, show it
      } else setError(message);
    } else if (currentUser?.attributes.email) {
      // If there's no new email, we can just go to the next step
      setIsSuccess(true);
      setReadyState(true);
    }
    setLoadingState(false);
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(handleChangeData)}>
        {currentUser?.attributes.email && !isEdit ? (
          <div>
            <p style={{ margin: '1rem 0 0 0', fontSize: '1.5rem' }}>
              Twoje konto już posiada podpięty e-mail: <br />
              <b>{currentUser.attributes.email}</b>
            </p>
            <p
              style={{
                margin: '0.7rem 0 0 0',
                fontSize: '1.2rem',
                color: theme.colors.accentBlue,
                textDecoration: 'underline'
              }}
              onClick={() => setIsEdit(true)}
            >
              Zmień adres e-mail
            </p>
          </div>
        ) : (
          <div>
            <Label htmlFor="e-mail">E-mail</Label>
            <StyledInput
              id="e-mail"
              placeholder={currentUser?.attributes.email || 'example@email.com'}
              error={errors.email}
              type="email"
              {...register('email', {
                required: !currentUser?.attributes.email,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
              })}
              disabled={isSuccess}
            />
            {errors.email && <ErrorParagraph style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>E-mail nie jest poprawny!</ErrorParagraph>}
            {error && <ErrorParagraph style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>{error}</ErrorParagraph>}
          </div>
        )}
        <div>
          <LawWrapper>
            <LawCheckbox type="checkbox" {...register('lawCheckbox', { required: true })} disabled={isSuccess} />
            <LawLabel htmlFor="law-stuff">
              Akceptuję{' '}
              <Statute
                target="_blank"
                rel="noopener noreferrer"
                href="https://mcusercontent.com/37d42ea39057bd19a6e145ae5/files/00677c65-acf7-0bce-0887-bc6ad7ff5b2f/RA.pdf"
              />{' '}
              i{' '}
              <PrivacyPolicy
                target="_blank"
                rel="noopener noreferrer"
                href="https://mcusercontent.com/37d42ea39057bd19a6e145ae5/files/89fad581-ca06-baf3-7b3e-26f902be009e/PPA.pdf"
              />
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
          isDisabled={isSuccess || isLoading}
        >
          {!isSuccess ? (
            !isLoading ? (
              'Wyślij'
            ) : (
              <>
                Wysyłam... <Loader style={{ width: '25px', marginLeft: '1rem' }} fitContent />
              </>
            )
          ) : (
            'Wysłano!'
          )}
        </Button>
      </Form>
    </FormWrapper>
  );
};
export default DataPage;
