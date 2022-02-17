import React, { useEffect } from 'react';
import Day from 'components/organisms/Day/Day';
import { Wrapper, Form, Heading, StyledButton } from './TimeSetupPage.styles';

interface props {
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultData = [
  {
    dayName: 'Poniedziałek',
    startHour: '8:00',
    endHour: '16:00'
  },
  {
    dayName: 'Wtorek',
    startHour: '8:00',
    endHour: '16:00'
  },
  {
    dayName: 'Środa',
    startHour: '8:00',
    endHour: '16:00'
  },
  {
    dayName: 'Czwartek',
    startHour: '8:00',
    endHour: '16:00'
  },
  {
    dayName: 'Piątek',
    startHour: '8:00',
    endHour: '16:00'
  }
];

const TimeSetupPage: React.FC<props> = ({ setReadyState }) => {
  useEffect(() => {
    setReadyState(false);
  }, []);

  return (
    <Wrapper>
      <Heading>Ustaw godziny pracy</Heading>
      <Form>
        {defaultData.map(({ startHour, endHour, dayName }) => (
          <Day startHour={startHour} endHour={endHour} dayName={dayName} />
        ))}
        <StyledButton onClick={() => setReadyState(true)}>Zatwierdź</StyledButton>
      </Form>
    </Wrapper>
  );
};

export default TimeSetupPage;
