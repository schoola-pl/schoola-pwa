import { PageWrapper, StyledCalendar, CancelButton, Wrapper, InnerWrapper, ModalWrapper } from './CalendarPage.styles';
import { useState } from 'react';
import { useModal } from 'hooks/useModal';
import { format } from 'date-fns';
import Button from 'components/atoms/Button/Button';
import Hours from 'components/molecules/Hours/Hours';
import PsychoTemplate from 'components/templates/PsychoTemplate/PsychoTemplate';
import pl from 'date-fns/locale/pl';
import './styles.css';

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
          </InnerWrapper>
          <Hours />
        </Wrapper>
      </PageWrapper>
    </PsychoTemplate>
  );
};

export default CalendarPage;
