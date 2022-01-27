import { Wrapper, WelcomeButton } from './FirstLoginTemplate.styles';
import StepCircles from 'components/molecules/StepCircles/StepCircles';
import ArrowIcon from 'assets/icons/ArrowIcon.svg';

const FirstLoginTemplate: React.FC = ({ children }) => (
  <Wrapper>
    {children}
    <WelcomeButton icon={ArrowIcon} />
    <StepCircles />
  </Wrapper>
);

export default FirstLoginTemplate;
