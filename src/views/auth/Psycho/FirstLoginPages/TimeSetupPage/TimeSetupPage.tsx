import React, { useEffect, useState } from 'react';
import ToggleSwitch from 'components/molecules/ToggleSwitch/ToggleSwitch';
import styled from 'styled-components';

interface props {
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Wrapper = styled.div`
  background-color: white;
  height: 80vh;
  width: 90vw;
  border-radius: 2rem;
  transform: translateY(-8%);
  box-shadow: ${({ theme }) => theme.innerStyles.box};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
`;

const TimeSetupPage: React.FC<props> = ({ setReadyState }) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    setReadyState(false);
  }, []);

  return (
    <Wrapper>
      <h1>Ustaw godziny pracy</h1>
      <form>
        <ToggleSwitch onChange={(event: any) => setToggle(event.target.checked)} />
        <p>the switch is {toggle ? 'on' : 'of'}</p>
      </form>
    </Wrapper>
  );
};

export default TimeSetupPage;
