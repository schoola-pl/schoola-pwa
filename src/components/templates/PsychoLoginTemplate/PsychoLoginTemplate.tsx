import { Animated, WelcomeButton, Wrapper } from './PsychoLoginTemplate.styles';
import StepCircles from 'components/molecules/StepCircles/StepCircles';
import ArrowIcon from 'assets/icons/ArrowIcon.svg';
import React, { useState } from 'react';
import Welcome from 'views/auth/User/FirstLoginPages/Welcome/Welcome';
import DataPage from 'views/auth/User/FirstLoginPages/DataPage/DataPage';
import FinishPage from 'views/auth/User/FirstLoginPages/FinishPage/FinishPage';
import TimeSetupPage from 'views/auth/Psycho/FirstLoginPages/TimeSetupPage/TimeSetupPage';

const PsychoLoginTemplate: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isReady, setReadyState] = useState(true);

  const nextStep = () => {
    if (counter < 2) {
      setCounter((prev) => ++prev);
    } else {
      setCounter((prev) => ++prev);
      setIsFinished(true);
    }
  };

  const decideStep = (c: number) => {
    switch (c) {
      case 0:
        return <Welcome />;
      case 1:
        return <DataPage setReadyState={setReadyState} />;
      case 2:
        return <TimeSetupPage setReadyState={setReadyState} />;
      case 3:
        return <FinishPage />;
      default:
        return <Welcome />;
    }
  };

  return (
    <Wrapper>
      <Animated>{decideStep(counter)}</Animated>
      {!isFinished && <WelcomeButton isDisabled={!isReady} onClick={nextStep} icon={ArrowIcon} />}
      {!isFinished && <StepCircles step={counter} />}
    </Wrapper>
  );
};

export default PsychoLoginTemplate;
