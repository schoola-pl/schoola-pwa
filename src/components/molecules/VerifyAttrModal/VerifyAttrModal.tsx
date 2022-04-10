import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import React, { useState } from 'react';
import { useModal } from '../../../hooks/useModal';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../hooks/useAuth';
import ErrorParagraph from 'components/atoms/ErrorParagraph/ErrorParagraph';
import { Wrapper } from './VerifyAttrModal.styles';
import Loader from 'components/atoms/Loader/Loader';
import { useNotification } from '../../../hooks/useNotification';

interface props {
  attr: {
    name: 'email' | 'phone_number';
    value: string;
  };
}

const VerifyAttrModal: React.FC<props> = ({ attr }) => {
  const { closeModal } = useModal();
  const { register, handleSubmit } = useForm();
  const { verifyAttributeSubmit } = useAuth();
  const { notifyUser } = useNotification();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleVerifyAttr = async ({ code }: { code: string }) => {
    // Verify the code procedure
    setIsLoading(true);
    const res = await verifyAttributeSubmit({ attribute: attr.name, code });
    setIsLoading(false);
    // If there's an error, display it
    if (!res.success) setError(res.message);
    else {
      // Close modal & notify user about success
      closeModal();
      notifyUser({ value: 'Pomyślnie zweryfikowano adres e-mail!', type: 'success', level: 0 });
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(handleVerifyAttr)}>
        <label htmlFor="code">Kod weryfikacyjny</label>
        <Input
          id="code"
          type="text"
          {...register('code', {
            required: true,
            pattern: /^[0-9]{6}$/
          })}
        />
        {!error ? (
          <p>
            {attr.name === 'email' ? (
              <>
                Musisz wejść na adres <b>{attr.value}</b> i przepisać kod
              </>
            ) : (
              <>
                Musisz wejść na numer <b>{attr.value}</b> i przepisać kod
              </>
            )}
          </p>
        ) : (
          <ErrorParagraph>{error}</ErrorParagraph>
        )}
        <Button>
          {!isLoading ? (
            'Zatwierdź'
          ) : (
            <>
              Weryfikacja... <Loader style={{ marginLeft: '1rem' }} fitContent />
            </>
          )}
        </Button>
      </form>
    </Wrapper>
  );
};

export default VerifyAttrModal;
