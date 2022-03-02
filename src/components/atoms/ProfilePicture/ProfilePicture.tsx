import React from 'react';
import { Wrapper, Picture } from './ProfilePicture.styles';
import { Link } from 'react-router-dom';

interface Props {
  icon: string | undefined;
  isPublic?: boolean;
}

const ProfilePicture: React.FC<Props> = ({ icon, isPublic }) => (
  <Wrapper as={isPublic ? Link : ''} to="/profile">
    <Picture icon={icon} isPublic={isPublic} />
  </Wrapper>
);

export default ProfilePicture;
