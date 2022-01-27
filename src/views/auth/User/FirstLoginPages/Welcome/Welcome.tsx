import { Wrapper, Greetings, IconDiv, WelcomeButton, Circle, StepCircleWrapper } from './Welcome.styles';
import WelcomeIcon from 'assets/icons/WelcomeIcon.svg';
import ArrowIcon from 'assets/icons/ArrowIcon.svg';

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
