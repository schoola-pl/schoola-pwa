import React, { useState } from 'react';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import DotsMenuIcon from 'assets/icons/DotsMenuIcon.svg';
import QuestionMark from 'assets/icons/QuestionMark.png';
import CommentIcon from 'assets/icons/CommentIcon.svg';
import Heart from 'components/atoms/Heart/Heart';
import {
  ActionsWrapper,
  InfoWrapper,
  LikeWrapper,
  ProfilePicture,
  QuestionInfo,
  QuestionInnerWrapper,
  QuestionWrapper,
  StyledActionMenu,
  StyledComments,
  StyledInput,
  StyledPicture,
  ToggleMenu
} from './Question.styles';

interface Props {
  date: string;
  content: string;
  numberOfComments: number;
  numberOfHearts: number;
  isSpotted: boolean;
  ref?: any;
}

const Question: React.FC<Props> = React.forwardRef(({ date, content, numberOfComments, numberOfHearts, isSpotted }, ref) => {
  const [isOpened, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isOpened);
  };

  return (
    <QuestionWrapper ref={ref}>
      <InfoWrapper>
        <StyledPicture random={Math.ceil(Math.random() * 5)}>
          <ProfilePicture icon={QuestionMark} />
        </StyledPicture>
        <QuestionInfo>
          <p>{date}</p>
          <h1>Ktoś zadał pytanie:</h1>
        </QuestionInfo>
        <div>
          <StyledActionMenu accountType="spottedAdmin" isOpened={isOpened} />
          <ToggleMenu icon={DotsMenuIcon} onClick={handleToggleMenu} />
        </div>
      </InfoWrapper>
      <QuestionInnerWrapper>
        <p>{content}</p>
      </QuestionInnerWrapper>
      <ActionsWrapper>
        <LikeWrapper>
          <Heart numberOfHearts={numberOfHearts} />
        </LikeWrapper>
        {isSpotted ? (
          <StyledComments as="a" href="/spotted/comments" data-comments-count={numberOfComments}>
            <SidebarLink icon={CommentIcon} />
          </StyledComments>
        ) : (
          <StyledInput type="text" placeholder="Napisz komentarz" />
        )}
      </ActionsWrapper>
    </QuestionWrapper>
  );
});

export default Question;
