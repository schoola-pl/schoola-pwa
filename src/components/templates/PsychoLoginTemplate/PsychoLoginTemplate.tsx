import { Animated, WelcomeButton, Wrapper } from './PsychoLoginTemplate.styles';
import StepCircles from 'components/molecules/StepCircles/StepCircles';
import ArrowIcon from 'assets/icons/ArrowIcon.svg';
import React, { useEffect, useState } from 'react';
import Welcome from 'views/User/FirstLoginPages/Welcome/Welcome';
import DataPage from 'views/User/FirstLoginPages/DataPage/DataPage';
import FinishPage from 'views/User/FirstLoginPages/FinishPage/FinishPage';
import TimeSetupPage from 'views/Psycho/FirstLoginPages/TimeSetupPage/TimeSetupPage';

export const counterItemName = 'counter-psycho';

const PsychoLoginTemplate: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isReady, setReadyState] = useState(true);

  useEffect(() => {
    const gotCounter = localStorage.getItem(counterItemName);
    if (gotCounter) setCounter(parseInt(gotCounter));
  }, []);

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
        localStorage.setItem(counterItemName, '1');
        return <DataPage setReadyState={setReadyState} />;
      case 2:
        localStorage.setItem(counterItemName, '2');
        return <TimeSetupPage setReadyState={setReadyState} />;
      case 3:
        localStorage.setItem(counterItemName, '3');
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
