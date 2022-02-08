import { Circle, StepCircleWrapper } from './StepCircles.styles';
import React from 'react';

interface Props {
  step?: number;
}

const StepCircles: React.FC<Props> = ({ step }) => {
  return (
    <StepCircleWrapper>
      <Circle isActive={step === 0} />
      <Circle isActive={step === 1} />
      <Circle isActive={step === 2} />
    </StepCircleWrapper>
  );
};

export default StepCircles;
