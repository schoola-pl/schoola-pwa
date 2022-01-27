import { Circle, StepCircleWrapper } from './StepCircles.styles';

interface Props {
  step?: number;
}

const StepCircles: React.FC<Props> = ({ step }) => {
  return (
    <StepCircleWrapper>
      <Circle />
      <Circle />
      <Circle />
    </StepCircleWrapper>
  );
};

export default StepCircles;
