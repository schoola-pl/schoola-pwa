import styled from 'styled-components';
import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import { PageWrapper } from './Spotted.styles';
import AskQuestionInput from 'components/molecules/AskQuestionInput/AskQuestionInput';
import DotsMenuIcon from 'assets/icons/DotsMenuIcon.svg';
import QuestionMark from 'assets/icons/QuestionMark.png';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import CommentIcon from 'assets/icons/CommentIcon.svg';

type Props = {
  icon?: any;
};

const QuestionWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  height: 20rem;
  width: 90%;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 1.5rem;
`;

const StyledPicture = styled.div`
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

const ProfilePicture = styled.div<Props>`
  width: 87%;
  height: 87%;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: white;
  border-radius: inherit;
  border: none;
  background-size: 70%;
  background-position: center;
  padding: 2rem;
  z-index: 9999999;
`;

const InfoWrapper = styled.div`
  display: flex;
`;

const QuestionInfo = styled.div`
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

const ToggleMenu = styled(SidebarLink)`
  transform: translateY(16%);
  margin-left: 7rem;
  height: 4rem;
  width: 4rem;
  background-color: transparent;
`;

const QuestionInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  transform: translateY(-20%);
  margin-left: 3rem;
  height: 6rem;
  margin-bottom: 0.75rem;
  border-left: 3px solid ${({ theme }) => theme.colors.accentGreen};

  p {
    padding: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const ActionsWrapper = styled.div`
  display: flex;
  transform: translateY(-30%);
  align-items: center;
  justify-content: flex-end;
  margin-right: 0.75rem;
`;

const StyledComments = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  width: 12rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};

  p {
    display: flex;
    margin-right: 0.5rem;

    strong {
      margin-right: 0.5rem;
    }
  }
`;

const Spotted = () => {
  return (
    <UserTemplate>
      <PageWrapper>
        <AskQuestionInput />
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
      </PageWrapper>
    </UserTemplate>
  );
};

export default Spotted;
