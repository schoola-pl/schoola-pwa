import { useState } from 'react';
import {
  CommentWrapper,
  StyledActionMenu,
  InfoWrapper,
  StyledPicture,
  ProfilePicture,
  CommentInfo,
  ToggleMenu,
  CommentInnerWrapper
} from './Comment.styles';
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
        <section>
          <StyledPicture>
            <ProfilePicture icon={profilePicture} />
          </StyledPicture>
          <CommentInfo>
            <h1>{name}</h1>
            <p>{date}</p>
          </CommentInfo>
        </section>
        <ToggleMenu onClick={handleToggleMenu} icon={DotsMenuIcon} />
        <StyledActionMenu accountType="user" isOpened={isOpened} />
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
