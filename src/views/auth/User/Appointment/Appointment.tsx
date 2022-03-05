import { useState } from 'react';
import { InnerWrapper, PageWrapper, StyledCalendar, Wrapper } from './Appointment.styles';
import { format } from 'date-fns';
import UserHours from 'components/molecules/UserHours/UserHours';
import pl from 'date-fns/locale/pl';
import './styles.css';
import Info from 'components/atoms/Info/Info';

const Appointment = () => {
  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const [selectedPsycho, setSelectedPsycho] = useState<string | null>(null);

  const setActive = (day: Date) => {
    const preparedDate = format(day, 'd MMMM yyyy', { locale: pl });
    const activeButtons = document.querySelectorAll('.button-active');
    if (activeButtons.length >= 1) activeButtons.forEach((button) => button.classList.remove('button-active'));
    const element: any = document.querySelector('[aria-label="' + preparedDate + '"]');
    element.classList.add('button-active');
    const dateISO = format(new Date(day), 'yyyy-MM-dd');
    setSelectedDate(dateISO);
  };

  const handleChangePsycho = (e: any) => {
    setSelectedPsycho(e.target.value);
  };

  const handleBookMeeting = () => {
    console.log(selectedPsycho, selectedHour, selectedDate);
  };

  return (
    <PageWrapper>
      <StyledCalendar
        onClickDay={(e) => setActive(e)}
        locale="pl"
        minDate={new Date(2022, 1, 1)}
        maxDate={new Date(2022, 6, 12)}
        onChange={onChange}
        value={value}
      />
      <Wrapper>
        {!selectedDate ? (
          <Info>Aby kontynuować, wybierz termin w kalendarzu!</Info>
        ) : (
          <>
            <InnerWrapper>
              <h1>Godziny</h1>
              <select onChange={handleChangePsycho}>
                <option value="" selected disabled hidden>
                  Wybierz psychologa
                </option>
                <option value="21">Marzena Jarosz</option>
                <option value="12">Krzysztof Golonka</option>
              </select>
            </InnerWrapper>
            {!selectedPsycho ? (
              <Info>Najpierw wybierz psychologa!</Info>
            ) : (
              <UserHours psychoId={selectedPsycho} setActiveHour={setSelectedHour} activeHour={selectedHour} />
            )}
            {selectedHour && selectedPsycho && <button onClick={handleBookMeeting}>Poproś o spotkanie</button>}
          </>
        )}
      </Wrapper>
    </PageWrapper>
  );
};

export default Appointment;
