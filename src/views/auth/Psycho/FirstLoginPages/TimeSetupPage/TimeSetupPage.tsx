import React, { useEffect } from 'react';
import Day from 'components/molecules/Day/Day';
import styled from 'styled-components';
import { useModal } from 'hooks/useModal';
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
  justify-content: center;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const TimeSetupPage: React.FC<props> = ({ setReadyState }) => {
  useEffect(() => {
    setReadyState(false);
  }, []);

  return (
    <Wrapper>
      <h1>Ustaw godziny pracy</h1>
      <Form>
        <Day />
      </Form>
    </Wrapper>
  );
};

export default TimeSetupPage;
