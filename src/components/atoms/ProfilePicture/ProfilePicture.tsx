import React from 'react';
import { Wrapper, Picture } from './ProfilePicture.styles';

interface Props {
  icon: string | undefined;
  isPublic?: boolean;
}

const ProfilePicture: React.FC<Props> = ({ icon, isPublic }) => (
  <Wrapper>
    <Picture icon={icon} isPublic={isPublic} />
  </Wrapper>
);

export default ProfilePicture;
