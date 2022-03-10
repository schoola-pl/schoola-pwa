import { InnerWrapper, PageWrapper, StyledCalendar, Wrapper } from './CalendarPage.styles';
import { useState } from 'react';
import Hours from 'components/molecules/Hours/Hours';
import './styles.css';
import { format } from 'date-fns';
import pl from 'date-fns/locale/pl';
import { addDays, addMonths } from 'helpers/date';
import Info from 'components/atoms/Info/Info';

const getActiveButtons = () => document.querySelectorAll('.button-active');
const setActiveButton = (date: Date) => {
  const preparedDate = format(date, 'd MMMM yyyy', { locale: pl });
  const element = document.querySelector('[aria-label="' + preparedDate + '"]');
  element?.classList.add('button-active');
};
const removeActiveButtons = () => getActiveButtons().forEach((button) => button.classList.remove('button-active'));

const CalendarPage = () => {
  const [selectedDate, setDate] = useState<string>('');
  const [value, onChange] = useState(new Date());

  const setActive = (day: Date) => {
    if (getActiveButtons().length >= 1) removeActiveButtons();
    setActiveButton(day);
    const dateISO = format(day, 'yyyy-MM-dd');
    setDate(dateISO);
  };

  return (
    <PageWrapper>
      <StyledCalendar onClickDay={(e) => setActive(e)} locale="pl" minDate={addDays(1)} maxDate={addMonths(1)} onChange={onChange} value={value} />
      <Wrapper>
        {!selectedDate ? (
          <Info>Wybierz najpierw datę, która ciebie interesuje!</Info>
        ) : (
          <>
            <InnerWrapper>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <h1>Godziny</h1>
              </div>
            </InnerWrapper>
            <Hours date={selectedDate} />
          </>
        )}
      </Wrapper>
    </PageWrapper>
  );
};

export default CalendarPage;
