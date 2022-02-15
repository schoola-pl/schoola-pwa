import { InputWrapper, MessageActionWrapper, SendMessageButton, StyledInput, Wrapper } from './AskQuestionInput.styles';
import SendIcon from 'assets/icons/SendIcon.svg';
import { useForm } from 'react-hook-form';
import { useSpotted } from 'hooks/useSpotted';
import { useState } from 'react';
import Loader from 'components/atoms/Loader/Loader';

interface props {
  resetSpotted: () => void;
}

const AskQuestionInput: React.FC<props> = ({ resetSpotted }) => {
  const { handleSubmit, reset, register } = useForm();
  const [isLoading, setLoadingState] = useState(false);
  const { decideAboutSpott } = useSpotted();

  const handleAddSpott = async ({ message }: { message: string }) => {
    reset();
    setLoadingState(true);
    await decideAboutSpott(message);
    setLoadingState(false);
    resetSpotted();
  };

  return (
    <Wrapper onSubmit={handleSubmit(handleAddSpott)}>
      <InputWrapper>
        <StyledInput type="text" placeholder="Napisz wiadomość" {...register('message', { required: true })} disabled={isLoading} />
      </InputWrapper>
      <MessageActionWrapper>
        <p>Wysyłanie wiadomości jest w pełni</p>
        {!isLoading ? <SendMessageButton icon={SendIcon} /> : <Loader fitContent bgColor="white" size="35px 35px" />}
      </MessageActionWrapper>
    </Wrapper>
  );
};

export default AskQuestionInput;
