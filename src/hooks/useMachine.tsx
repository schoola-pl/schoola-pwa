import { useState } from 'react';

interface MachineContextTypes {
  currentState: string;
  transition: (currentState: string, action: string) => string;
  nextState: (action: string) => void;
  compareState: (state: string) => boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useMachine = (initial: string, transitions: any): MachineContextTypes => {
  const [currentState, updateState] = useState<string>(initial);

  const transition = (currentState: string, action: string): string => {
    const nextState = transitions[currentState][action];
    return nextState || currentState;
  };

  const nextState = (action: string) => {
    updateState((state) => transition(state, action));
  };

  const compareState = (state: string) => currentState === state;

  return {
    transition,
    nextState,
    compareState,
    currentState
  };
};

export default useMachine;
