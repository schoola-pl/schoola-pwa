import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import styled from 'styled-components';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import Question from 'components/organisms/Question/Question';
import DudeComment from 'assets/icons/DudeComment.jpg';
import DotsMenuIcon from 'assets/icons/DotsMenuIcon.svg';
import Heart from 'components/atoms/Heart/Heart';

const mockData = [
  {
    date: '24.04.2022',
    content: 'Czy karny Błaszczykowskiego zostanie powtórzony?',
    numberOfComments: 4,
    numberOfHearts: 8
  }
];

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  heigth: 100vh;
  justify-content: flex-start;
  align-items: center;
`;

const CommentWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  height: 15rem;
  background-color: white;
  border-radius: 2rem;
  width: 90%;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
`;

export const StyledPicture = styled.div`
  transform: translateY(10%);
  margin: 1rem;
  height: 5rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10rem;
  background: linear-gradient(90deg, rgba(184, 208, 252, 1) 0%, rgba(91, 117, 166, 1) 0%, rgba(85, 171, 103, 1) 100%);
`;

interface Props {
  icon?: string;
}

export const ProfilePicture = styled.div<Props>`
  width: 87%;
  height: 87%;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: white;
  border-radius: inherit;
  border: none;
  background-size: 100%;
  background-position: center;
  padding: 2rem;
  z-index: 9999999;
`;

export const InfoWrapper = styled.div`
  display: flex;
`;

export const QuestionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0.75rem;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  p {
    transform: translateY(-100%);
    padding-bottom: 0.75rem;
  }
`;

export const ToggleMenu = styled(SidebarLink)`
  transform: translateY(16%);
  margin-left: 11rem;
  height: 4rem;
  width: 4rem;
  background-color: transparent;
`;

export const QuestionInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-40%);

  p {
    padding: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const HeartWrapper = styled.div`
  position: relative;
  height: 1rem;
  display: flex;
  padding: 0;
  position: relative;
  margin-right: 20rem;
  transform: translateY(-150%);
`;

const SpottedComment = () => {
  return (
    <UserTemplate>
      <SectionWrapper>
        {mockData.map(({ date, content, numberOfHearts, numberOfComments }) => (
          <Question key={date} date={date} isSpotted={false} content={content} numberOfComments={numberOfComments} numberOfHearts={numberOfHearts} />
        ))}
        <CommentWrapper>
          <InfoWrapper>
            <StyledPicture>
              <ProfilePicture icon={DudeComment} />
            </StyledPicture>
            <QuestionInfo>
              <h1>Jarek Pałubicki</h1>
              <p>12.12.2012</p>
            </QuestionInfo>
            <ToggleMenu icon={DotsMenuIcon} />
          </InfoWrapper>
          <QuestionInnerWrapper>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <HeartWrapper>
              <Heart numberOfHearts={19} />
            </HeartWrapper>
          </QuestionInnerWrapper>
        </CommentWrapper>
      </SectionWrapper>
    </UserTemplate>
  );
};

export default SpottedComment;
