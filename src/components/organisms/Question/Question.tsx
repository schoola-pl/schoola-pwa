import {
  QuestionWrapper,
  InfoWrapper,
  ActionsWrapper,
  StyledComments,
  StyledPicture,
  ProfilePicture,
  QuestionInfo,
  QuestionInnerWrapper,
  ToggleMenu
} from './Question.styles';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import DotsMenuIcon from 'assets/icons/DotsMenuIcon.svg';
import QuestionMark from 'assets/icons/QuestionMark.png';

import CommentIcon from 'assets/icons/CommentIcon.svg';

const Question = () => {
  return (
    <QuestionWrapper>
      <InfoWrapper>
        <StyledPicture>
          <ProfilePicture icon={QuestionMark} />
        </StyledPicture>
        <QuestionInfo>
          <h1>Ktoś zadał pytanie:</h1>
          <p>02.02.2022</p>
        </QuestionInfo>
        <ToggleMenu icon={DotsMenuIcon} />
      </InfoWrapper>
      <QuestionInnerWrapper>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing?</p>
      </QuestionInnerWrapper>
      <ActionsWrapper>
        <StyledComments>
          <SidebarLink icon={CommentIcon} />
          <p>
            <strong>12</strong> komentarzy
          </p>
        </StyledComments>
      </ActionsWrapper>
    </QuestionWrapper>
  );
};

export default Question;
