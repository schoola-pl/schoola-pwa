import { useState } from 'react';
import ProfilePicture from 'components/atoms/ProfilePicture/ProfilePicture';
import { CommentWrapper, InfoWrapper, CommentInfo, ToggleMenu, CommentInnerWrapper } from './Comment.styles';
import DotsMenuIcon from 'assets/icons/DotsMenuIcon.svg';
import Heart from 'components/atoms/Heart/Heart';
import ActionMenu from 'components/molecules/ActionMenu/ActionMenu';

interface Props {
  profilePicture: string;
  name: string;
  date: string;
  numberOfHearts: number;
  content: string;
  isPublic: boolean;
}

const Comment: React.FC<Props> = ({ isPublic, profilePicture, name, date, numberOfHearts, content }) => {
  const [isOpened, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isOpened);
  };

  return (
    <CommentWrapper>
      <InfoWrapper>
        <section>
          <ProfilePicture icon={profilePicture} isPublic={isPublic} />
          <CommentInfo>
            <h1>{name}</h1>
            <p>{date}</p>
          </CommentInfo>
        </section>
        <ToggleMenu onClick={handleToggleMenu} icon={DotsMenuIcon} />
        <ActionMenu isComment={true} accountType="spottedAdmin" isOpened={isOpened} />
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
