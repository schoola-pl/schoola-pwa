import { ContentWrapper, Picture, UserInfoWrapper } from './Person.styles';

interface Props {
  userName: string;
  description: string | null;
  userProfilePicture: string;
}

const Person: React.FC<Props> = ({ userName, userProfilePicture, description }) => {
  return (
    <UserInfoWrapper>
      <Picture src={userProfilePicture} alt={userName} />
      <ContentWrapper>
        <h1>{userName}</h1>
        <p>{description || 'Brak opisu'}</p>
      </ContentWrapper>
    </UserInfoWrapper>
  );
};

export default Person;
