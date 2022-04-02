import React from 'react';
import { StyledPicture, Wrapper } from './ProfilePicture.styles';
import QuestionMark from 'assets/icons/QuestionMark.png';
import { useNavigate } from 'react-router';

const ProfilePictureComponent: React.FC<{
  isSpotted: boolean;
  image?: string;
  postOwner?: {
    id: string;
    first_name: string;
    last_name: string;
    avatar: string;
    TextClassName: string;
  };
}> = ({ isSpotted, image, postOwner }) => {
  const navigate = useNavigate();

  return (
    <StyledPicture random={Math.ceil(Math.random() * 5)} onClick={() => (!isSpotted ? navigate(`/student/profiles/${postOwner?.id}`) : null)}>
      <Wrapper isSpotted={isSpotted}>
        <img src={image || QuestionMark} alt={`${postOwner?.first_name}'s photo`} />
      </Wrapper>
    </StyledPicture>
  );
};

export default React.memo(ProfilePictureComponent);
