import {
  QuestionWrapper,
  InfoWrapper,
  ActionsWrapper,
  StyledComments,
  StyledPicture,
  ProfilePicture,
  QuestionInfo,
  QuestionInnerWrapper,
  ToggleMenu,
  LikeWrapper
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
}

const Question: React.FC<Props> = ({ date, content, numberOfComments, numberOfHearts }) => {
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
        <ToggleMenu icon={DotsMenuIcon} />
      </InfoWrapper>
      <QuestionInnerWrapper>
        <p>{content}</p>
      </QuestionInnerWrapper>
      <ActionsWrapper>
        <LikeWrapper>
          <Heart numberOfHearts={numberOfHearts} />
        </LikeWrapper>
        <StyledComments as="a" href="/comments">
          <SidebarLink icon={CommentIcon} />
          <p>
            <strong>{numberOfComments}</strong> komentarzy
          </p>
        </StyledComments>
      </ActionsWrapper>
    </QuestionWrapper>
  );
};

export default Question;
