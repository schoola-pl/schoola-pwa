import { useState } from 'react';
import { InnerWrapper, PageWrapper, StyledCalendar, Wrapper } from './Appointment.styles';
import { format } from 'date-fns';
import UserHours from 'components/molecules/UserHours/UserHours';
import pl from 'date-fns/locale/pl';
import './styles.css';
import Info from 'components/atoms/Info/Info';
import PsychoList from 'components/molecules/PsychoList/PsychoList';
import { addDays, addMonths } from 'helpers/date';
import { storeRoot, useBookMeetingMutation } from 'store';
import { useSelector } from 'react-redux';

const getActiveButtons = () => document.querySelectorAll('.button-active');
const setActiveButton = (date: Date) => {
  const preparedDate = format(date, 'd MMMM yyyy', { locale: pl });
  const element = document.querySelector('[aria-label="' + preparedDate + '"]');
  element?.classList.add('button-active');
};
const removeActiveButtons = () => getActiveButtons().forEach((button) => button.classList.remove('button-active'));

const Appointment = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const [addMeeting] = useBookMeetingMutation();
  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const [selectedPsycho, setSelectedPsycho] = useState<string | null>(null);

  const setActive = (day: Date) => {
    if (getActiveButtons().length >= 1) removeActiveButtons();
    setActiveButton(day);
    const dateISO = format(new Date(day), 'yyyy-MM-dd');
    setSelectedDate(dateISO);
  };

  const handleChangePsycho = (e: any) => {
    setSelectedPsycho(e.target.value);
  };

  const handleBookMeeting = async () => {
    if (!user || !selectedPsycho || !selectedHour || !selectedDate) return;
    const data = {
      date: selectedDate,
      start: selectedHour,
      pId: selectedPsycho,
      user: parseInt(user.id)
    };
    await addMeeting(data);
    setSelectedPsycho(null);
    setSelectedHour(null);
    setSelectedDate(null);
    removeActiveButtons();
  };

  return (
    <PageWrapper>
      <StyledCalendar onClickDay={(e) => setActive(e)} locale="pl" minDate={addDays(1)} maxDate={addMonths(1)} onChange={onChange} value={value} />
      <Wrapper>
        {!selectedDate ? (
          <Info>Aby kontynuować, wybierz termin w kalendarzu!</Info>
        ) : (
          <>
            <InnerWrapper>
              <h1>Godziny</h1>
              <PsychoList handleChangePsycho={handleChangePsycho} />
            </InnerWrapper>
            {!selectedPsycho ? (
              <Info>Najpierw wybierz psychologa!</Info>
            ) : (
              <UserHours psychoId={selectedPsycho} date={selectedDate} setActiveHour={setSelectedHour} activeHour={selectedHour} />
            )}
            {selectedHour && selectedPsycho && <button onClick={handleBookMeeting}>Umów spotkanie</button>}
          </>
        )}
      </Wrapper>
    </PageWrapper>
  );
};

export default Appointment;
