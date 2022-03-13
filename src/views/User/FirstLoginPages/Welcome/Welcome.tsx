import { Greetings, IconDiv } from './Welcome.styles';
import WelcomeIcon from 'assets/icons/WelcomeIcon.svg';

const Welcome = () => {
  return (
    <>
      <Greetings>
        <h1>
          Witamy w aplikacji <span>schoola</span>!
        </h1>
        <p>
          Zanim przejdziemy do korzystania z aplikacji, musisz skonfigurować <span>swoje konto</span>.
        </p>
      </Greetings>
      <IconDiv icon={WelcomeIcon} />
    </>
  );
};

export default Welcome;
