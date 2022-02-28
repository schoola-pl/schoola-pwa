import styled from 'styled-components';
import { useState } from 'react';
import Hours from 'components/organisms/Hours/Hours';
import { useModal } from 'hooks/useModal';
import Calendar from 'react-calendar';
import PsychoTemplate from 'components/templates/PsychoTemplate/PsychoTemplate';
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

const Wrapper = styled.div`
  width: 90%;
  height: 24.5rem;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  h1 {
    margin-right: 6rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  button {
    border: none;
    border-radius: 1rem;
    color: white;
    height: 4rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.xs};
    background-color: ${({ theme }) => theme.colors.accentBlue};
  }
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
    <PsychoTemplate>
      <PageWrapper>
        <StyledCalendar
          onClickDay={(e) => setActive(format(e, 'd MMMM yyyy', { locale: pl }))}
          locale="pl"
          minDate={new Date(2022, 1, 1)}
          maxDate={new Date(2022, 6, 12)}
          onChange={onChange}
          value={value}
        />
        <Wrapper>
          <InnerWrapper>
            <h1>Godziny</h1>
            <button>Odwołaj obecność</button>
          </InnerWrapper>
          <Hours />
        </Wrapper>
      </PageWrapper>
    </PsychoTemplate>
  );
};

export default CalendarPage;
