import styled from 'styled-components';
import { useState } from 'react';
import Calendar from 'react-calendar';
import './styles.css';
import { format } from 'date-fns';
import pl from 'date-fns/locale/pl';

export const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledCalendar = styled(Calendar)`
  width: 90%;
  height: 29.5rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  margin-bottom: 1rem;
`;

const InnerWrapper = styled.div`
  width: 90%;
  height: 24.5rem;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-left: 3rem;
    width: 100%;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2.5rem;
    margin-bottom: 0.2rem;
    transform: translateY(-5%);
  }

  button {
    border: none;
    border-radius: 1.5rem;
    color: white;
    height: 4rem;
    width: 90%;
    background-color: ${({ theme }) => theme.colors.accentBlue};
  }
`;
const Hour = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 1rem;
  background-color: #f7f8fa;
  height: 2.8rem;
  width: 13rem;

  font-size: ${({ theme }) => theme.fontSize.xs};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
`;

const CalendarPage = () => {
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
      <InnerWrapper>
        <h1>Godziny</h1>
        <div>
          <Hour>8:00</Hour>
          <Hour>8:55</Hour>
          <Hour>9:50</Hour>
          <Hour>10:55</Hour>
          <Hour>11:50</Hour>
          <Hour>12:35</Hour>
        </div>
        <button>Potwierdź</button>
      </InnerWrapper>
    </PageWrapper>
  );
};

export default CalendarPage;
