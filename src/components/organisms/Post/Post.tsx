import React, { useState } from 'react';
import {
  QuestionWrapper,
  InfoWrapper,
  ActionsWrapper,
  StyledComments,
  QuestionInfo,
  QuestionInnerWrapper,
  LikeWrapper,
  StyledInput,
  ToggleMenu,
  StyledActionMenu
} from './Post.styles';
import ProfilePicture from 'components/atoms/ProfilePicture/ProfilePicture';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import DotsMenuIcon from 'assets/icons/DotsMenuIcon.svg';
import QuestionMark from 'assets/icons/QuestionMark.png';
import CommentIcon from 'assets/icons/CommentIcon.svg';
import Heart from 'components/atoms/Heart/Heart';
import { Props } from './PostTypes';

const Post: React.FC<Props> = React.forwardRef(
  ({ userName, userProfilePicture, date, content, numberOfComments, numberOfHearts, isPublic, commentSection }, ref) => {
    const [isOpened, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
      setMenuOpen(!isOpened);
    };

    return (
      <QuestionWrapper ref={ref}>
        <InfoWrapper>
          <section>
            <ProfilePicture icon={isPublic ? userProfilePicture : QuestionMark} isPublic={isPublic} />
            <QuestionInfo>
              <h1>{isPublic ? userName : 'Anonim napisał:'}</h1>
              <p>{date}</p>
            </QuestionInfo>
          </section>
          <StyledActionMenu accountType="spottedAdmin" isOpened={isOpened} />
          <ToggleMenu icon={DotsMenuIcon} onClick={handleToggleMenu} />
        </InfoWrapper>
        <QuestionInnerWrapper>
          <p>{content}</p>
        </QuestionInnerWrapper>
        <ActionsWrapper>
          <LikeWrapper>
            <Heart numberOfHearts={numberOfHearts} />
          </LikeWrapper>
          {commentSection ? (
            <StyledInput type="text" placeholder="Napisz komentarz" />
          ) : (
            <StyledComments as="a" href="/spotted/comments">
              <SidebarLink icon={CommentIcon} />
              <p>
                <strong>{numberOfComments}</strong> komentarzy
              </p>
            </StyledComments>
          )}
        </ActionsWrapper>
      </QuestionWrapper>
    );
  }
);

export default Post;
