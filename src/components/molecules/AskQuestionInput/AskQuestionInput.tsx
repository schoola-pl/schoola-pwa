import { InputWrapper, MessageActionWrapper, SendMessageButton, StyledInput, Wrapper } from './AskQuestionInput.styles';
import SendIcon from 'assets/icons/SendIcon.svg';
import { useForm } from 'react-hook-form';
import { useSpotted } from 'hooks/useSpotted';

interface props {
  resetSpotted: () => void;
}

const AskQuestionInput: React.FC<props> = ({ resetSpotted }) => {
  const { handleSubmit, reset, register } = useForm();
  const { addSpottProtocol } = useSpotted();

  const handleAddSpott = async ({ message }: { message: string }) => {
    reset();
    await addSpottProtocol(message);
    resetSpotted();
  };

  return (
    <Wrapper onSubmit={handleSubmit(handleAddSpott)}>
      <InputWrapper>
        <StyledInput type="text" placeholder="Napisz wiadomość" {...register('message', { required: true })} />
      </InputWrapper>
      <MessageActionWrapper>
        <p>Wysyłanie wiadomości jest w pełni</p>
        <SendMessageButton icon={SendIcon} />
      </MessageActionWrapper>
    </Wrapper>
  );
};

export default AskQuestionInput;
