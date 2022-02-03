import { WelcomeButton, Wrapper } from './FirstLoginTemplate.styles';
import StepCircles from 'components/molecules/StepCircles/StepCircles';
import ArrowIcon from 'assets/icons/ArrowIcon.svg';
import React from 'react';

const FirstLoginTemplate: React.FC = ({ children }) => (
  <Wrapper>
    {children}
    <WelcomeButton icon={ArrowIcon} />
    <StepCircles />
  </Wrapper>
);

export default FirstLoginTemplate;
