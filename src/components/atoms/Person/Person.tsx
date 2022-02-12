import { UserInfoWrapper, Picture, ContentWrapper } from './Person.styles';

interface Props {
  userName: string;
  description: string;
  userProfilePicture: string;
}

const Person: React.FC<Props> = ({ userName, userProfilePicture, description }) => {
  return (
    <UserInfoWrapper>
      <Picture src={userProfilePicture} alt={userName} />
      <ContentWrapper>
        <h1>{userName}</h1>
        <p>{description}</p>
      </ContentWrapper>
    </UserInfoWrapper>
  );
};

export default Person;
