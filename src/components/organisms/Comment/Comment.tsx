import { CommentWrapper, InfoWrapper, StyledPicture, ProfilePicture, QuestionInfo, ToggleMenu, CommentInnerWrapper } from './Comment.styles';
import DotsMenuIcon from 'assets/icons/DotsMenuIcon.svg';
import Heart from 'components/atoms/Heart/Heart';

interface Props {
  profilePicture: string;
  name: string;
  date: string;
  numberOfHearts: number;
  content: string;
}

const Comment: React.FC<Props> = ({ profilePicture, name, date, numberOfHearts, content }) => {
  return (
    <CommentWrapper>
      <InfoWrapper>
        <StyledPicture>
          <ProfilePicture icon={profilePicture} />
        </StyledPicture>
        <QuestionInfo>
          <h1>{name}</h1>
          <p>{date}</p>
        </QuestionInfo>
        <ToggleMenu icon={DotsMenuIcon} />
      </InfoWrapper>
      <CommentInnerWrapper>
        <div>
          <Heart numberOfHearts={numberOfHearts} />
        </div>
        <p>{content}</p>
      </CommentInnerWrapper>
    </CommentWrapper>
  );
};

export default Comment;
