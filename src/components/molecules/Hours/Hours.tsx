import React from 'react';
import { Hour, HoursWrapper } from './Hours.styles';
import { storeRoot, useAddExceptionMutation, useGetMeetingsExceptionQuery } from 'store';
import { format, parseISO } from 'date-fns';
import envHours from 'assets/globals/working-hours';
import Info from 'components/atoms/Info/Info';
import { useSelector } from 'react-redux';
import Button from 'components/atoms/Button/Button';
import { useModal } from 'hooks/useModal';
import { CancelAddingStudent, ModalButtonsWrapper, ModalInfoWrapper } from 'views/Forms/ManageButtons/ManageButtons.styles';
import Loader from 'components/atoms/Loader/Loader';

interface props {
  date: string;
}

const Hours: React.FC<props> = ({ date }) => {
  const psycho = useSelector((state: storeRoot) => state.user);
  const { openModal, closeModal } = useModal();
  const [addException, { isLoading }] = useAddExceptionMutation();
  const meetingsException = useGetMeetingsExceptionQuery({
    pId: psycho?.id || null,
    date
  });

  const hasNoException = (hour: string): boolean => {
    if (meetingsException.data) {
      const meetings = meetingsException.data;
      const meetingsForHour = meetings.filter((meeting) => meeting.hour === hour);
      return meetingsForHour.length === 0;
    }
    return false;
  };

  const handleAddException = (hour: string) => {
    if (!psycho) return;
    const newException = {
      pId: String(psycho.id),
      date,
      hour
    };
    addException(newException);
  };

  const handleAddExceptionForAllHours = () => {
    for (const hour of envHours) {
      handleAddException(hour);
    }
  };

  const printHours = () => {
    if (!psycho || !psycho.working_hours) return;
    const hours = psycho.working_hours.map((obj) => {
      if (obj.day === format(new Date(date), 'EEEE').toLowerCase()) {
        return envHours.map((hour) => {
          if (
            parseISO(`2022-01-01 ${hour}`) <= parseISO(`2022-01-01 ${obj.end}`) &&
            parseISO(`2022-01-01 ${hour}`) >= parseISO(`2022-01-01 ${obj.start}`)
          ) {
            return (
              <Hour key={hour} isCanceled={!hasNoException(hour)}>
                {hour}
                <button onClick={() => handleAddException(hour)} />
              </Hour>
            );
          }
        });
      }
    });
    const preHours = hours.filter((hour) => hour !== undefined);
    const preparedHours = preHours[0]?.filter((obj) => obj !== undefined) || [];
    return preparedHours.length > 0 ? hours : <Info style={{ width: '100%', textAlign: 'center', gridColumn: '1 / 3' }}>Nieobecność</Info>;
  };

  return (
    <HoursWrapper>
      {!psycho || meetingsException.isLoading ? (
        'Sprawdzam...'
      ) : (
        <>
          {!isLoading ? (
            printHours()
          ) : (
            <Info style={{ gridColumn: '1/3', display: 'flex' }}>
              Odwołuję... <Loader fitContent bgColor="#fff" style={{ marginLeft: '1rem' }} />
            </Info>
          )}
          <button
            id="exception"
            onClick={() =>
              openModal(
                <ModalInfoWrapper>
                  <ModalButtonsWrapper>
                    <Button
                      onClick={() => {
                        handleAddExceptionForAllHours();
                        closeModal();
                      }}
                      style={{ marginRight: '1rem' }}
                    >
                      Odwołaj
                    </Button>
                    <CancelAddingStudent onClick={closeModal}>Anuluj</CancelAddingStudent>
                  </ModalButtonsWrapper>
                </ModalInfoWrapper>,
                `Czy chcesz odwołać obecność dnia ${format(new Date(date), 'dd.MM.yy')}?`
              )
            }
          >
            Odwołaj obecność
          </button>
        </>
      )}
    </HoursWrapper>
  );
};

export default Hours;
