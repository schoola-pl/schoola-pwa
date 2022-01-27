import styled from 'styled-components';
import WelcomeIcon from 'assets/icons/WelcomeIcon.svg';
import ArrowIcon from 'assets/icons/ArrowIcon.svg';

type Props = {
  icon?: any;
};

const WelcomeButton = styled.button<Props>`
  height: 6rem;
  width: 6rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  border-radius: 7rem;
  background-size: 75%;
  background-position: center;
  cursor: pointer;
  margin-bottom: 5rem;
  border: none;

  transform: translateY(50%);
`;

const Wrapper = styled.div`
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const IconDiv = styled.div<Props>`
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  height: 35rem;
  width: 35rem;
`;

const Greetings = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  align-items: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    text-align: center;
  }
`;

const StepCircleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  margin-left: 3rem;

  > * {
    &:first-child {
       background-color: ${({ theme }) => theme.colors.accentBlue};
    }


`;

const Circle = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  background-color: #f7f8fa;
  border-radius: 1rem;
  margin-right: 1rem;
`;

const Welcome = () => {
  return (
    <Wrapper>
      <Greetings>
        <h1>Witamy w aplikacji schoola!</h1>
        <p>Zanim przejdziemy do korzystania z aplikacji, musisz skonfigurować swoje konto</p>
      </Greetings>
      <IconDiv icon={WelcomeIcon} />
      <WelcomeButton icon={ArrowIcon} />
      <StepCircleWrapper>
        <Circle />
        <Circle />
        <Circle />
      </StepCircleWrapper>
    </Wrapper>
  );
};

export default Welcome;
