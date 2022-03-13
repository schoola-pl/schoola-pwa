import React from 'react';
import { authUser } from 'types/auth';
import { StyledPicture, Wrapper } from './ProfilePicture.styles';
import QuestionMark from 'assets/icons/QuestionMark.png';

const ProfilePictureComponent: React.FC<{ isSpotted: boolean; image?: string; postOwner?: authUser }> = ({ isSpotted, image, postOwner }) => {
  return (
    <StyledPicture random={Math.ceil(Math.random() * 5)}>
      <Wrapper isSpotted={isSpotted}>
        <img src={image || QuestionMark} alt={`${postOwner?.first_name}'s photo`} />
      </Wrapper>
    </StyledPicture>
  );
};

export default React.memo(ProfilePictureComponent);
