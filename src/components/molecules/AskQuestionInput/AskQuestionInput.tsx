import { useState } from 'react';
import {
  Wrapper,
  InputWrapper,
  StyledInput,
  MessageActionWrapper,
  StyledLabel,
  StyledRadio,
  StyledName,
  SendMessageButton
} from './AskQuestionInput.styles';
import SendIcon from 'assets/icons/SendIcon.svg';

const AskQuestionInput = () => {
  const [selectedRadio, setSelectedRadio] = useState('anonymous');
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => setSelectedRadio(e.currentTarget.value);
  const isRadioSelected = (value: string): boolean => selectedRadio === value;

  return (
    <Wrapper>
      <InputWrapper>
        <StyledInput type="text" placeholder="Zadaj pytanie" />
      </InputWrapper>
      <MessageActionWrapper>
        <StyledLabel>
          <StyledRadio onChange={handleRadioClick} checked={isRadioSelected('anonymous')} value="anonymous" name="anonymous" type="radio" />
          <span>Anonimowo</span>
        </StyledLabel>
        <StyledLabel>
          <StyledRadio
            onChange={handleRadioClick}
            checked={isRadioSelected('not-anonymous')}
            value="not-anonymous"
            name="not-anonymous"
            type="radio"
          />
          <span>
            Wyślij jako <StyledName>Jacek Gad</StyledName>
          </span>
        </StyledLabel>
        <SendMessageButton icon={SendIcon} />
      </MessageActionWrapper>
    </Wrapper>
  );
};

export default AskQuestionInput;
