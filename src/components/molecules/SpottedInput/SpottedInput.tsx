import { Wrapper, InputWrapper, StyledInput, MessageActionWrapper, SendMessageButton } from './SpottedInput.styles';
import SendIcon from 'assets/icons/SendIcon.svg';

const SpottedInput = () => {
  return (
    <Wrapper>
      <InputWrapper>
        <StyledInput type="text" placeholder="Napisz wiadomość" />
      </InputWrapper>
      <MessageActionWrapper>
        <p>Wysyłanie wiadomości jest w pełni</p>
        <SendMessageButton icon={SendIcon} />
      </MessageActionWrapper>
    </Wrapper>
  );
};

export default SpottedInput;
