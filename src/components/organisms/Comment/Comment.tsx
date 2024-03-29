import React, { useEffect, useState } from 'react';
import { CommentInfo, CommentInnerWrapper, CommentWrapper, InfoWrapper, ProfilePicture, StyledPicture, ToggleMenu } from './Comment.styles';
import DotsMenuIcon from 'assets/icons/DotsMenuIcon.svg';
import ActionMenu from 'components/molecules/ActionMenu/ActionMenu';
import { formatDistance } from 'date-fns';
import { pl } from 'date-fns/locale';
import { storeRoot, useDeletePostCommentMutation, useDeleteSpottedCommentMutation } from 'store';
import { useSelector } from 'react-redux';
import { useAvatar } from 'hooks/useAvatar';
import { useNavigate } from 'react-router';

interface Props {
  cId: number;
  uId: string;
  profilePicture: string;
  name: string;
  isSpotted: boolean;
  date: string;
  numberOfHearts: number;
  content: string;
}

const Comment: React.FC<Props> = ({ cId, uId, isSpotted, profilePicture, name, date, content }) => {
  const [isOpened, setMenuOpen] = useState(false);
  const [isCommentLoading, setCommentLoading] = useState(false);
  const [deletePostComment] = useDeletePostCommentMutation();
  const [deleteSpottedComment] = useDeleteSpottedCommentMutation();
  const navigate = useNavigate();
  const user = useSelector((state: storeRoot) => state.user);
  const { getAvatarById } = useAvatar();
  const [image, setImage] = useState('');

  useEffect(() => {
    if (profilePicture) {
      (async () => {
        const image = await getAvatarById(profilePicture);
        setImage(image);
      })();
    }
  }, [profilePicture]);

  const handleDeleteComment = async () => {
    setCommentLoading(true);
    if (isSpotted) await deleteSpottedComment({ commentId: cId });
    else await deletePostComment({ commentId: cId });
    setCommentLoading(false);
  };

  const handleToggleMenu = () => {
    setMenuOpen(!isOpened);
  };

  return (
    <CommentWrapper>
      <InfoWrapper>
        <StyledPicture random={Math.ceil(Math.random() * 5)} onClick={() => navigate(`/student/profiles/${uId}`)}>
          <ProfilePicture>
            <img src={image} alt={`${name.split(' ')[0]}'s photo`} />
          </ProfilePicture>
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
