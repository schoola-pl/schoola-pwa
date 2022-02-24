import { InputWrapper, MessageActionWrapper, SendMessageButton, StudentInfo, StyledInput, Wrapper } from './SpottedInput.styles';
import SendIcon from 'assets/icons/SendIcon.svg';
import { useForm } from 'react-hook-form';
import { useSpotted } from 'hooks/useSpotted';
import React, { useState } from 'react';
import Loader from 'components/atoms/Loader/Loader';
import { roles } from 'routes';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';

interface props {
  resetSpotted: () => void;
}

const AskQuestionInput: React.FC<props> = ({ resetSpotted }) => {
  const { handleSubmit, reset, register } = useForm();
  const user = useSelector((state: storeRoot) => state.user);
  const [isLoading, setLoadingState] = useState(false);
  const [studentInfo, setStudentInfo] = useState('');
  const { decideAboutSpott } = useSpotted();

  const handleAddSpott = async ({ message }: { message: string }) => {
    reset();
    setLoadingState(true);
    await decideAboutSpott(message);
    setLoadingState(false);
    if (user && user?.TextRole === roles.student) {
      setStudentInfo('Twój post został stworzony i wysłany do potwierdzenia!');
      setTimeout(() => {
        setStudentInfo('');
      }, 6000);
    } else resetSpotted();
  };

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {studentInfo && <StudentInfo>{studentInfo}</StudentInfo>}
      <Wrapper onSubmit={handleSubmit(handleAddSpott)}>
        <InputWrapper>
          <StyledInput type="text" placeholder="Napisz wiadomość" {...register('message', { required: true })} />
        </InputWrapper>
        <MessageActionWrapper>
          <p>Wysyłanie wiadomości jest w pełni</p>
          {!isLoading ? (
            <SendMessageButton icon={SendIcon} disabled={isLoading || !!studentInfo} />
          ) : (
            <Loader fitContent bgColor="white" size="35px 35px" />
          )}
        </MessageActionWrapper>
      </Wrapper>
    </div>
  );
};

export default React.memo(AskQuestionInput);
