import { Greetings, IconDiv } from './Welcome.styles';
import WelcomeIcon from 'assets/icons/WelcomeIcon.svg';

const Welcome = () => {
  return (
    <>
      <Greetings>
        <h1>Witamy w aplikacji schoola!</h1>
        <p>Zanim przejdziemy do korzystania z aplikacji, musisz skonfigurować swoje konto</p>
      </Greetings>
      <IconDiv icon={WelcomeIcon} />
    </>
  );
};

export default Welcome;
