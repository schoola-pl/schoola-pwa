import { useState } from 'react';
import { PageWrapper, StyledCalendar, Wrapper, InnerWrapper } from './Appointment.styles';
import { format } from 'date-fns';
import pl from 'date-fns/locale/pl';
import './styles.css';

const Appointment = () => {
  const [value, onChange] = useState(new Date());
  const setActive = (day: string) => {
    const activeButtons = document.querySelectorAll('.button-active');
    if (activeButtons.length >= 1) activeButtons.forEach((button) => button.classList.remove('button-active'));
    const element: any = document.querySelector('[aria-label="' + day + '"]');
    element.classList.add('button-active');
  };
  return (
    <PageWrapper>
      <StyledCalendar
        onClickDay={(e) => setActive(format(e, 'd MMMM yyyy', { locale: pl }))}
        locale="pl"
        minDate={new Date(2022, 1, 1)}
        maxDate={new Date(2022, 6, 12)}
        onChange={onChange}
        value={value}
      />
      <div>hello</div>
    </PageWrapper>
  );
};

export default Appointment;
