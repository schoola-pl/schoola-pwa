import React, { useEffect, useState } from 'react';
import Day from 'components/organisms/Day/Day';
import { Form, Heading, StyledButton, Wrapper } from './TimeSetupPage.styles';

interface props {
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>;
}

const days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'];

const TimeSetupPage: React.FC<props> = ({ setReadyState }) => {
  const [daysConfig, setDaysConfig] = useState<{ day: string; start: string; end: string }[]>([]);
  useEffect(() => {
    setReadyState(false);
  }, []);

  return (
    <Wrapper>
      <Heading>Ustaw godziny pracy</Heading>
      <Form>
        {days.map((name) => (
          <Day dayName={name} setDaysConfig={setDaysConfig} />
        ))}
        <StyledButton onClick={() => setReadyState(true)}>Zatwierdź</StyledButton>
      </Form>
    </Wrapper>
  );
};

export default TimeSetupPage;
