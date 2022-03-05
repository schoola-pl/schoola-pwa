import { ContentWrapper, Picture, UserInfoWrapper } from './Person.styles';

interface Props {
  userName: string;
  description: string | null;
  userProfilePicture: string;
}

const Person: React.FC<Props> = ({ userName, userProfilePicture, description }) => {
  return (
    <UserInfoWrapper>
      <div style={{ overflow: 'hidden' }}>
        <Picture src={userProfilePicture} alt={userName} />
      </div>
      <ContentWrapper>
        <h1>{userName}</h1>
        {description && <p>{description}</p>}
        <p>Mój opis życiorys czy cokolwiek tam będziee lolollolo</p>
      </ContentWrapper>
    </UserInfoWrapper>
  );
};

export default Person;
