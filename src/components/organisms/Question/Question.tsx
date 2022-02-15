import React, { useState } from 'react';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import DotsMenuIcon from 'assets/icons/DotsMenuIcon.svg';
import QuestionMark from 'assets/icons/QuestionMark.png';
import CommentIcon from 'assets/icons/CommentIcon.svg';
import Heart from 'components/atoms/Heart/Heart';
import {
  ActionsWrapper,
  InfoWrapper,
  LikeWrapper,
  ProfilePicture,
  QuestionInfo,
  QuestionInnerWrapper,
  QuestionWrapper,
  StyledComments,
  StyledInput,
  StyledPicture,
  ToggleMenu
} from './Question.styles';
import { formatDistance } from 'date-fns';
import { pl } from 'date-fns/locale';
import { Link } from 'react-router-dom';
import { storeRoot, useAddCommentMutation } from 'store';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import ActionMenu from 'components/molecules/ActionMenu/ActionMenu';
import { useSpotted } from 'hooks/useSpotted';

interface props {
  qId: number;
  date: string;
  content: string;
  numberOfComments: number;
  isSpotted: boolean;
  resetSpotted?: () => void;
  likes: {
    id: number;
    attributes: {
      likes: number;
      userIds: { id: number; userId: string }[];
    };
  };
}

const Question = React.forwardRef<HTMLDivElement, props>(({ qId, likes, date, content, numberOfComments, isSpotted, resetSpotted }, ref) => {
  const [isOpened, setMenuOpen] = useState(false);
  const [isPostLoading, setPostLoading] = useState(false);
  const [addComment, { isSuccess, isLoading }] = useAddCommentMutation();
  const { register, handleSubmit, reset } = useForm();
  const user = useSelector((state: storeRoot) => state.user);
  const { deleteSpott } = useSpotted();

  const handleAddComment = ({ message }: { message: string }) => {
    if (user && !isSpotted) {
      reset();
      addComment({
        spotted: qId,
        schoolId: String(user.schoolId),
        message,
        author_name: `${user.first_name} ${user.last_name}`
      });
    }
  };

  const handleToggleMenu = () => {
    setMenuOpen(!isOpened);
  };

  const handleDeleteQuestion = async () => {
    if (!isSpotted || !resetSpotted) return;
    setPostLoading(true);
    await deleteSpott(qId);
    resetSpotted();
    setPostLoading(false);
  };

  return (
    <QuestionWrapper ref={ref}>
      <InfoWrapper>
        <StyledPicture random={Math.ceil(Math.random() * 5)}>
          <ProfilePicture icon={QuestionMark} />
        </StyledPicture>
        <QuestionInfo>
          <p>{formatDistance(new Date(date), new Date(), { addSuffix: true, locale: pl })}</p>
          <h1>Ktoś zadał pytanie:</h1>
        </QuestionInfo>
        {isSpotted && (
          <div>
            <ActionMenu isOpened={isOpened} onClick={handleDeleteQuestion} isLoading={isPostLoading} />
            <ToggleMenu icon={DotsMenuIcon} onClick={handleToggleMenu} />
          </div>
        )}
      </InfoWrapper>
      <QuestionInnerWrapper>
        <p>{content}</p>
      </QuestionInnerWrapper>
      <ActionsWrapper>
        <LikeWrapper>
          <Heart likes={likes} />
        </LikeWrapper>
        {isSpotted ? (
          <StyledComments as={Link} to={`comments/${qId}`} data-comments-count={numberOfComments}>
            <SidebarLink icon={CommentIcon} />
          </StyledComments>
        ) : (
          <form onSubmit={handleSubmit(handleAddComment)}>
            <StyledInput
              type="text"
              disabled={isLoading}
              placeholder={!isSuccess ? (!isLoading ? 'Napisz komentarz' : 'Wysyłanie...') : 'Skomentowano!'}
              {...register('message', { required: true })}
            />
          </form>
        )}
      </ActionsWrapper>
    </QuestionWrapper>
  );
});

export default Question;
