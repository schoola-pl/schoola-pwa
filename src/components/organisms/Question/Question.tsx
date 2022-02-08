import React, { useState } from 'react';
import styled from 'styled-components';
import {
  QuestionWrapper,
  InfoWrapper,
  ActionsWrapper,
  StyledComments,
  StyledPicture,
  ProfilePicture,
  QuestionInfo,
  QuestionInnerWrapper,
  LikeWrapper,
  StyledInput,
  ToggleMenu,
  StyledActionMenu
} from './Question.styles';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import DotsMenuIcon from 'assets/icons/DotsMenuIcon.svg';
import QuestionMark from 'assets/icons/QuestionMark.png';
import CommentIcon from 'assets/icons/CommentIcon.svg';
import Heart from 'components/atoms/Heart/Heart';

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
        <section>
          <StyledPicture>
            <ProfilePicture icon={QuestionMark} />
          </StyledPicture>
          <QuestionInfo>
            <h1>Ktoś zadał pytanie:</h1>
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
        {isSpotted ? (
          <StyledComments as="a" href="/spotted/comments">
            <SidebarLink icon={CommentIcon} />
            <p>
              <strong>{numberOfComments}</strong> komentarzy
            </p>
          </StyledComments>
        ) : (
          <StyledInput type="text" placeholder="Napisz komentarz" />
        )}
      </ActionsWrapper>
    </QuestionWrapper>
  );
});

export default Question;
