import { Animated, WelcomeButton, Wrapper } from './FirstLoginTemplate.styles';
import StepCircles from 'components/molecules/StepCircles/StepCircles';
import ArrowIcon from 'assets/icons/ArrowIcon.svg';
import React, { useEffect, useState } from 'react';
import Welcome from 'views/User/FirstLoginPages/Welcome/Welcome';
import DataPage from 'views/User/FirstLoginPages/DataPage/DataPage';
import Hobbies from 'views/User/FirstLoginPages/Hobbies/Hobbies';
import FinishPage from 'views/User/FirstLoginPages/FinishPage/FinishPage';
import PhotoPage from 'views/User/FirstLoginPages/PhotoPage/PhotoPage';
import LinksPage from 'views/User/FirstLoginPages/LinksPage/LinksPage';

const FirstLoginTemplate: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isReady, setReadyState] = useState(true);

  useEffect(() => {
    const gotCounter = localStorage.getItem('counter');
    if (gotCounter) setCounter(parseInt(gotCounter));
  }, []);

  const nextStep = () => {
    if (counter < 4) {
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
        localStorage.setItem('counter', '1');
        return <DataPage setReadyState={setReadyState} />;
      case 2:
        localStorage.setItem('counter', '2');
        return <Hobbies setReadyState={setReadyState} />;
      case 3:
        localStorage.setItem('counter', '3');
        return <PhotoPage setReadyState={setReadyState} />;
      case 4:
        localStorage.setItem('counter', '4');
        return <LinksPage setReadyState={setReadyState} />;
      case 5:
        localStorage.setItem('counter', '5');
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

export default FirstLoginTemplate;
