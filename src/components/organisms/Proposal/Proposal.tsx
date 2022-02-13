import React from 'react';
import { useSpotted } from 'hooks/useSpotted';
import Button from 'components/atoms/Button/Button';
import { Decision, Question, Wrapper } from './Proposal.styles';

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
        <Button
          onClick={async () => {
            await approveSpott(qId, question);
            resetSpotted();
          }}
        >
          Dodaj
        </Button>
        <Button onClick={() => disapproveSpott(qId)}>Usuń</Button>
      </Decision>
    </Wrapper>
  );
};

export default Proposal;
