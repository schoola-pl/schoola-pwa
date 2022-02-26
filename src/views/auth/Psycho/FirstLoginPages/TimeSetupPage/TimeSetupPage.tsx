import React, { useEffect } from 'react';
import Day from 'components/organisms/Day/Day';
import { Form, Heading, StyledButton, Wrapper } from './TimeSetupPage.styles';

interface props {
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>;
}

const days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'];

const TimeSetupPage: React.FC<props> = ({ setReadyState }) => {
  useEffect(() => {
    setReadyState(false);
  }, []);

  return (
    <Wrapper>
      <Heading>Ustaw godziny pracy</Heading>
      <Form>
        {days.map((name) => (
          <Day dayName={name} />
        ))}
        <StyledButton onClick={() => setReadyState(true)}>Zatwierdź</StyledButton>
      </Form>
    </Wrapper>
  );
};

export default TimeSetupPage;
