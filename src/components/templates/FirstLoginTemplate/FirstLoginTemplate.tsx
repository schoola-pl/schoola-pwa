import styled from 'styled-components';
import StepCircles from 'components/molecules/StepCircles/StepCircles';
import ArrowIcon from 'assets/icons/ArrowIcon.svg';

interface Props {
  icon: string;
}

export const Wrapper = styled.div`
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const WelcomeButton = styled.button<Props>`
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

const FirstLoginTemplate: React.FC = ({ children }) => (
  <Wrapper>
    {children}
    <WelcomeButton icon={ArrowIcon} />
    <StepCircles />
  </Wrapper>
);

export default FirstLoginTemplate;
