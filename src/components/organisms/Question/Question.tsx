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
import { formatDistance } from 'date-fns';
import { pl } from 'date-fns/locale';
import { Link } from 'react-router-dom';

interface props {
  qId: number;
  date: string;
  content: string;
  numberOfComments: number;
  numberOfHearts: number;
  isSpotted: boolean;
}

const Question = React.forwardRef<HTMLDivElement, props>(({ qId, date, content, numberOfComments, numberOfHearts, isSpotted }, ref) => {
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
          <p>{formatDistance(new Date(date), new Date(), { addSuffix: true, locale: pl })}</p>
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
          <StyledComments as={Link} to={`comments/${qId}`} data-comments-count={numberOfComments}>
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
