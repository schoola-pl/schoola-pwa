import styled from 'styled-components';
import React from 'react';
import { useSpotted } from 'hooks/useSpotted';

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  min-height: 125px;
  grid-template-rows: 7rem 1fr 4rem;
  grid-gap: 1rem;
  align-items: center;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 1.5rem;
  padding: 1rem;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const Question = styled.p``;
export const Decision = styled.div``;

interface props {
  qId: number;
  question: string;
  resetSpotted: () => void;
}

const Proposal: React.FC<props> = ({ qId, question, resetSpotted }) => {
  const { disapproveSpott, approveSpott } = useSpotted();

  return (
    <Wrapper>
      <Question>{question}</Question>
      <Decision>
        <p
          onClick={async () => {
            await approveSpott(qId, question);
            resetSpotted();
          }}
        >
          yes
        </p>
        <p onClick={() => disapproveSpott(qId)}>no</p>
      </Decision>
    </Wrapper>
  );
};

export default Proposal;
