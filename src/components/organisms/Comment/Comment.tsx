import React, { useState } from 'react';
import { CommentInfo, CommentInnerWrapper, CommentWrapper, InfoWrapper, ProfilePicture, StyledPicture, ToggleMenu } from './Comment.styles';
import DotsMenuIcon from 'assets/icons/DotsMenuIcon.svg';
import ActionMenu from 'components/molecules/ActionMenu/ActionMenu';
import { formatDistance } from 'date-fns';
import { pl } from 'date-fns/locale';
import { storeRoot, useDeleteCommentMutation } from 'store';
import { useSelector } from 'react-redux';

interface Props {
  cId: number;
  profilePicture: string;
  name: string;
  date: string;
  numberOfHearts: number;
  content: string;
}

const Comment: React.FC<Props> = ({ cId, profilePicture, name, date, content }) => {
  const [isOpened, setMenuOpen] = useState(false);
  const [isCommentLoading, setCommentLoading] = useState(false);
  const [deleteComment] = useDeleteCommentMutation();
  const user = useSelector((state: storeRoot) => state.user);

  const handleDeleteComment = async () => {
    setCommentLoading(true);
    await deleteComment({ commentId: cId });
    setCommentLoading(false);
  };

  const handleToggleMenu = () => {
    setMenuOpen(!isOpened);
  };

  return (
    <CommentWrapper>
      <InfoWrapper>
        <StyledPicture random={Math.ceil(Math.random() * 5)}>
          <ProfilePicture icon={profilePicture} />
        </StyledPicture>
        <CommentInfo>
          <h1>{name}</h1>
          <p>{formatDistance(new Date(date), new Date(), { addSuffix: true, locale: pl })}</p>
        </CommentInfo>
        {user?.TextRole !== 'Student' && (
          <>
            <ToggleMenu onClick={handleToggleMenu} icon={DotsMenuIcon} />
            <ActionMenu onClick={handleDeleteComment} isComment={true} isOpened={isOpened} isLoading={isCommentLoading} />
          </>
        )}
      </InfoWrapper>
      <CommentInnerWrapper>
        <p>{content}</p>
      </CommentInnerWrapper>
    </CommentWrapper>
  );
};

export default Comment;
