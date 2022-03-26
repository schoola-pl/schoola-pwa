import { ClassWrapper, Flex } from './ProfileClass.styles';
import React from 'react';

interface Props {
  userClass: string;
}

const ProfileClass: React.FC<Props> = ({ userClass }) => (
  <ClassWrapper>
    <div>
      <p>Klasa</p>
      <Flex>
        <h1 data-testid="profile-class">{userClass} </h1>
        <h1>🏫</h1>
      </Flex>
    </div>
  </ClassWrapper>
);

export default ProfileClass;
