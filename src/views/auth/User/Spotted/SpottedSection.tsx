import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`;
export const Title = styled.h2`
  margin: 0 0 1rem 1rem;

  span {
    color: ${({ theme }) => theme.colors.accentGreen};
    font-weight: bold;
  }
`;
export const Body = styled.div`
  padding-bottom: 2rem;
  border-bottom: 2px solid #000;
`;

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
