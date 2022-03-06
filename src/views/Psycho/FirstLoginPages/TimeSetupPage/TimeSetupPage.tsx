import React, { useEffect, useState } from 'react';
import Day from 'components/organisms/Day/Day';
import { Form, Heading, StyledButton, Wrapper } from './TimeSetupPage.styles';
import { useUser } from 'hooks/useUser';

interface props {
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>;
}

type daysType = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';

const days: daysType[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

const TimeSetupPage: React.FC<props> = ({ setReadyState }) => {
  const [daysConfig, setDaysConfig] = useState<{ day: string; start: string; end: string }[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const { updateSettings } = useUser();

  useEffect(() => {
    setReadyState(false);
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    updateSettings({
      working_hours: daysConfig
    });
    setIsLoading(false);
    setIsSuccess(true);
    setReadyState(true);
  };

  return (
    <Wrapper>
      <Heading>Ustaw godziny pracy</Heading>
      <Form>
        {days.map((name) => (
          <Day dayName={name} setDaysConfig={setDaysConfig} />
        ))}
        <StyledButton isDisabled={daysConfig.length <= 0 || isSuccess || isLoading} onClick={handleSubmit}>
          {!isSuccess ? (daysConfig.length <= 0 ? 'Wybierz coś!' : 'Zatwierdź') : 'Skonfigurowano godziny!'}
        </StyledButton>
      </Form>
    </Wrapper>
  );
};

export default TimeSetupPage;
