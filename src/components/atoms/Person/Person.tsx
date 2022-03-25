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
        <h1 data-testid="profile-name">{userName}</h1>
        {description && <p data-testid="profile-description">{description}</p>}
      </ContentWrapper>
    </UserInfoWrapper>
  );
};

export default Person;
