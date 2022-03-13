import { ClassWrapper, Flex, CirclesWrapper, CircleOne, CircleTwo, CircleThree } from './ProfileClass.styles';

interface Props {
  userClass: string;
}

const ProfileClass: React.FC<Props> = ({ userClass }) => (
  <ClassWrapper>
    <div>
      <p>Klasa</p>
      <Flex>
        <h1>{userClass} </h1>
        <h1>🏫</h1>
      </Flex>
    </div>
  </ClassWrapper>
);

export default ProfileClass;
