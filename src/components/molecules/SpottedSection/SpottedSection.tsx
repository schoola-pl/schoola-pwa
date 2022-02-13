import React from 'react';
import { Body, Title, Wrapper } from './SpottedSection.styles';

interface props {
  title: string | JSX.Element;
}

const SpottedSection: React.FC<props> = ({ children, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Body>{children}</Body>
    </Wrapper>
  );
};

export default SpottedSection;
