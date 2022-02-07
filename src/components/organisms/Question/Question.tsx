import { useState } from 'react';
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
  StyledInput
} from './Question.styles';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import DotsMenuIcon from 'assets/icons/DotsMenuIcon.svg';
import QuestionMark from 'assets/icons/QuestionMark.png';
import CommentIcon from 'assets/icons/CommentIcon.svg';
import Heart from 'components/atoms/Heart/Heart';
import ActionMenu from 'components/molecules/ActionMenu/ActionMenu';

interface Props {
  date: string;
  content: string;
  numberOfComments: number;
  numberOfHearts: number;
  isSpotted: boolean;
}

interface ToggleMenuProps {
  icon?: string;
  onClick?: any;
}

const ToggleMenu = styled.button<ToggleMenuProps>`
  transform: translateY(16%);
  margin-left: 7rem;
  background-color: transparent;
  height: 5rem;
  width: 5rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: transparent;
  border-radius: 1.5rem;
  border: none;
  display: block;
  background-size: 75%;
  background-position: center;
  cursor: pointer;
  margin: 1rem;
`;

const Question: React.FC<Props> = ({ date, content, numberOfComments, numberOfHearts, isSpotted }) => {
  const [isOpened, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isOpened);
  };

  return (
    <QuestionWrapper>
      <InfoWrapper>
        <StyledPicture>
          <ProfilePicture icon={QuestionMark} />
        </StyledPicture>
        <QuestionInfo>
          <h1>Ktoś zadał pytanie:</h1>
          <p>{date}</p>
        </QuestionInfo>
        <ToggleMenu icon={DotsMenuIcon} onClick={handleToggleMenu} />
        <ActionMenu accountType="spottedAdmin" isOpened={isOpened} />
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
};

export default Question;
