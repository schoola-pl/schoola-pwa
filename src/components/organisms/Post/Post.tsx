import React, { useEffect, useState } from 'react';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import DotsMenuIcon from 'assets/icons/DotsMenuIcon.svg';
import CommentIcon from 'assets/icons/CommentIcon.svg';
import SendIcon from 'assets/icons/SendIcon.svg';
import Heart from 'components/atoms/Heart/Heart';
import {
  ActionsWrapper,
  InfoWrapper,
  LikeWrapper,
  QuestionInfo,
  QuestionInnerWrapper,
  QuestionWrapper,
  SendMessageButton,
  StyledComments,
  StyledInput,
  ToggleMenu
} from './Post.styles';
import { formatDistance } from 'date-fns';
import { pl } from 'date-fns/locale';
import { Link } from 'react-router-dom';
import { storeRoot, useAddPostCommentMutation, useAddSpottedCommentMutation } from 'store';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import ActionMenu from 'components/molecules/ActionMenu/ActionMenu';
import { useSpotted } from 'hooks/useSpotted';
import { usePost } from 'hooks/usePost';
import { useAvatar } from 'hooks/useAvatar';
import ProfilePicture from 'components/molecules/ProfilePicture/ProfilePicture';

interface props {
  qId: number;
  date: string;
  title?: string;
  content: string;
  comments: number;
  isSpotted: boolean;
  postOwner?: {
    id: string;
    first_name: string;
    last_name: string;
    avatar: string;
    TextClassName: string;
  };
  isComment: boolean;
  resetFn?: () => void;
  likes: {
    id: number;
    attributes: {
      likes: number;
      userIds: { id: number; userId: string }[];
    };
  };
}

const Post = React.forwardRef<HTMLDivElement, props>(({ qId, postOwner, isSpotted, likes, date, content, comments, isComment, resetFn }, ref) => {
  const [isOpened, setMenuOpen] = useState(false);
  const [isPostLoading, setPostLoading] = useState(false);
  const [addSpottedComment, { isSuccess: isSpottedQuerySuccess, isLoading: isSpottedQueryLoading }] = useAddSpottedCommentMutation();
  const [addPostComment, { isSuccess: isPostQuerySuccess, isLoading: isPostQueryLoading }] = useAddPostCommentMutation();
  const { register, handleSubmit, reset } = useForm();
  const user = useSelector((state: storeRoot) => state.user);
  const { deleteSpott } = useSpotted();
  const { deletePost } = usePost();
  const { getAvatarById } = useAvatar();
  const [image, setImage] = useState('');

  const handleAddComment = ({ message }: { message: string }) => {
    if (user && isComment) {
      reset();
      const requestBody = {
        schoolId: String(user.schoolId),
        message,
        author: String(user.id)
      };
      if (isSpotted) {
        addSpottedComment({
          spotted: qId,
          ...requestBody
        });
      } else {
        addPostComment({
          post: qId,
          ...requestBody
        });
      }
    }
  };

  useEffect(() => {
    if (!isSpotted && postOwner) {
      (async () => {
        const image = await getAvatarById(postOwner?.avatar);
        setImage(image);
      })();
    }
  }, [postOwner]);

  const handleToggleMenu = () => {
    setMenuOpen(!isOpened);
  };

  const handleDeleteQuestion = async () => {
    if (isComment || !resetFn) return;
    setPostLoading(true);
    if (isSpotted) {
      await deleteSpott(qId);
    } else {
      await deletePost(qId);
    }
    resetFn();
    setPostLoading(false);
  };

  return (
    <QuestionWrapper ref={ref} data-testid={'post-wrapper'}>
      <InfoWrapper>
        <ProfilePicture isSpotted={isSpotted} postOwner={postOwner} image={image} />
        <QuestionInfo>
          <p>{formatDistance(new Date(date), new Date(), { addSuffix: true, locale: pl })}</p>
          <h1>{postOwner ? `${postOwner.first_name} ${postOwner.last_name} | ${postOwner.TextClassName}` : 'Ktoś zadał pytanie:'}</h1>
        </QuestionInfo>
        {!isComment && user?.TextRole !== 'Student' && (
          <div>
            <ActionMenu isOpened={isOpened} onClick={handleDeleteQuestion} isLoading={isPostLoading} />
            <ToggleMenu data-testid={'post-menu'} icon={DotsMenuIcon} onClick={handleToggleMenu} />
          </div>
        )}
      </InfoWrapper>
      <QuestionInnerWrapper>
        <p>{content}</p>
      </QuestionInnerWrapper>
      <ActionsWrapper>
        <LikeWrapper data-testid={'post-likes'}>
          <Heart likes={likes} />
        </LikeWrapper>
        {!isComment ? (
          <StyledComments data-testid={'post-comments-btn'} as={Link} to={`comments/${qId}`} data-comments-count={comments}>
            <SidebarLink icon={CommentIcon} />
          </StyledComments>
        ) : (
          <form onSubmit={handleSubmit(handleAddComment)}>
            <StyledInput
              data-testid="comments-input"
              type="text"
              disabled={isPostQueryLoading || isSpottedQueryLoading}
              placeholder={
                !(isPostQuerySuccess || isSpottedQuerySuccess)
                  ? !(isPostQueryLoading || isSpottedQueryLoading)
                    ? 'Napisz komentarz'
                    : 'Wysyłanie...'
                  : 'Skomentowano!'
              }
              {...register('message', { required: true })}
            />
            <SendMessageButton type="submit" data-testid="comments-send" icon={SendIcon} />
          </form>
        )}
      </ActionsWrapper>
    </QuestionWrapper>
  );
});

export default React.memo(Post);
