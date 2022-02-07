import { useState } from 'react';
import ActionMenu from 'components/molecules/ActionMenu/ActionMenu';
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
  const [isOpened, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isOpened);
  };

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
        <ToggleMenu onClick={handleToggleMenu} icon={DotsMenuIcon} />
        <ActionMenu accountType="user" isOpened={isOpened} />
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
