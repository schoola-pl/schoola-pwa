import styled from 'styled-components';
import { useState } from 'react';
import Calendar from 'react-calendar';
import PsychoTemplate from 'components/templates/PsychoTemplate/PsychoTemplate';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
import './styles.css';

{
  /* <DateTimePicker calendarClassName onChange={onChange} value={value} /> */
}
export const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledCalendar = styled(Calendar)`
  width: 90%;
  height: 28rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);

  // button {
  //   border: none;
  //   padding: 1.5rem;
  //   color: black;
  //   background-color: white;
  //   border-radius: 20rem;
  // }
`;

const CalendarPage = () => {
  const [value, onChange] = useState(new Date());

  return (
    <PsychoTemplate>
      <PageWrapper>
        <StyledCalendar
          // onClickDay={setActive}
          locale="pl"
          minDate={new Date(2022, 1, 1)}
          maxDate={new Date(2022, 6, 12)}
          onChange={onChange}
          value={value}
        />
      </PageWrapper>
    </PsychoTemplate>
  );
};

export default CalendarPage;
