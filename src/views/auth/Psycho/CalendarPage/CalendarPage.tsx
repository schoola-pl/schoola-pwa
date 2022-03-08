import { CancelButton, InnerWrapper, ModalWrapper, PageWrapper, StyledCalendar, Wrapper } from './CalendarPage.styles';
import { useState } from 'react';
import { useModal } from 'hooks/useModal';
import Button from 'components/atoms/Button/Button';
import Hours from 'components/molecules/Hours/Hours';
import './styles.css';
import { format } from 'date-fns';
import pl from 'date-fns/locale/pl';
import { addDays, addMonths } from 'helpers/date';

const CalendarPage = () => {
  const [value, onChange] = useState(new Date());
  const { openModal, closeModal } = useModal();
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
        minDate={addDays(1)}
        maxDate={addMonths(1)}
        onChange={onChange}
        value={value}
      />
      <Wrapper>
        <InnerWrapper>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            <h1>Godziny</h1>
            <button
              onClick={() =>
                openModal(
                  <ModalWrapper>
                    <Button onClick={closeModal}>Akceptuj zmiany</Button>
                    <CancelButton onClick={closeModal}>Anuluj</CancelButton>
                  </ModalWrapper>,
                  'Odwołaj - 10.03'
                )
              }
            >
              Odwołaj obecność
            </button>
          </div>
        </InnerWrapper>
        <Hours />
      </Wrapper>
    </PageWrapper>
  );
};

export default CalendarPage;
