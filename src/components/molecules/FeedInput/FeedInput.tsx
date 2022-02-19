import { InputWrapper, ProfilePicture, SendMessageButton, StyledInput, StyledPicture } from './FeedInput.styles';
import SendIcon from 'assets/icons/SendIcon.svg';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';
import { usePost } from 'hooks/usePost';
import React, { useState } from 'react';
import Loader from 'components/atoms/Loader/Loader';
import { useForm } from 'react-hook-form';

const getRandomSequence = (number: number, name = 'stary') => {
  switch (number) {
    case 1:
      return `Chcesz coś ogłosić ${name}?`;
    case 2:
      return `Pytaj o co chcesz ${name}!`;
    case 3:
      return 'Pochwal się całej szkole swoimi osiągnięciami!';
    case 4:
      return 'Potrzebujesz czegoś? Pisz!';
    default:
      return `Chcesz coś ogłosić ${name}?`;
  }
};

interface props {
  resetFeed: () => void;
}

const FeedInput: React.FC<props> = ({ resetFeed }) => {
  const user = useSelector((state: storeRoot) => state.user);
  const [isLoading, setLoadingState] = useState(false);
  const { addPost } = usePost();
  const { reset, register, handleSubmit } = useForm();

  const handleAddPost = async ({ message }: { message: string }) => {
    reset();
    setLoadingState(true);
    await addPost(message);
    setLoadingState(false);
    resetFeed();
  };

  return (
    <InputWrapper onSubmit={handleSubmit(handleAddPost)}>
      <StyledPicture>
        <ProfilePicture icon={user?.avatar} />
      </StyledPicture>
      <StyledInput
        type="text"
        placeholder={getRandomSequence(Math.ceil(Math.random() * 4), user?.first_name)}
        {...register('message', { required: true })}
      />
      {!isLoading ? <SendMessageButton icon={SendIcon} disabled={isLoading} /> : <Loader fitContent bgColor="white" size="35px 35px" />}
    </InputWrapper>
  );
};

export default FeedInput;