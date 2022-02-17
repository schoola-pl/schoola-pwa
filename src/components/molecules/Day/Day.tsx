import { useState } from 'react';
import ToggleSwitch from 'components/atoms/ToggleSwitch/ToggleSwitch';
import styled from 'styled-components';
import { useModal } from 'hooks/useModal';

const DayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 89%;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #f7f8fa;

  h1 {
    padding-left: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  div {
    display: flex;
    align-items: center;
  }
`;

const DayTimeWrapper = styled.div`
  display: flex;

  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  button {
    display: flex;
    align-items: center;
    padding-left: 2.5rem;
    border: none;
    background-color: white;

    &::after {
      content: '>';
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

const Day = () => {
  const [toggle, setToggle] = useState(false);
  const { openModal, closeModal } = useModal();

  return (
    <DayWrapper>
      <div>
        <ToggleSwitch onChange={(event: any) => setToggle(event.target.checked)} />
        <h1>Poniedziałek</h1>
      </div>
      {toggle ? (
        <DayTimeWrapper>
          <p>8:00 - 16:00</p>
          <button
            onClick={() =>
              openModal(
                <div>
                  <h1>hello</h1>
                </div>,
                'test'
              )
            }
          />
        </DayTimeWrapper>
      ) : (
        <p>Nieobecność</p>
      )}
    </DayWrapper>
  );
};

export default Day;
