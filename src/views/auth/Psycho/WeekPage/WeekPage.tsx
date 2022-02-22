import styled from 'styled-components';
import PsychoTemplate from 'components/templates/PsychoTemplate/PsychoTemplate';
import { Link } from 'react-router-dom';
import { theme } from 'assets/styles/theme';

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;
export const MeetingWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
`;

export const DayLink = styled(Link)`
  width: 100%;
  margin-bottom: 3rem;
  background-color: white;
  border-radius: 2rem;
  box-shadow: ${({ theme }) => theme.innerStyles.box};
  border-bottom: 2px solid ${({ theme }) => theme.colors.accentGreen};
  display: grid;
  grid-template-columns: 45% 55%;
  padding-left: 1rem;
  cursor: pointer;
  text-decoration: none;
  color: black;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  p {
    display: flex;
    padding-right: 3rem;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.xs};

    strong {
      margin-left: 0.5rem;
      color: white;
      padding: 0.5px 5px;
      background-color: ${({ theme }) => theme.colors.accentBlue};
      border-radius: 5px;
    }

    &::after {
      font-size: ${({ theme }) => theme.fontSize.s};
      content: '>';
      padding-left: 2rem;
    }
  }
`;

const Week = styled.div`
  width: 100%;
  display: flex;
  padding-left: 2rem;
  align-items: center;
  justify-content: flex-start;
`;

const WeekWrapper = styled.div`
  color: white;
  height: 5rem;
  border-radius: 1rem;
  width: 11rem;
  margin-bottom: 2.5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.accentBlue};
  align-items: center;
  justify-content: center;
  text-align: center;
  p {
    transform: translateY(-10%);
  }
`;

const WeekPage = () => (
  <PsychoTemplate>
    <PageWrapper>
      <Week>
        <WeekWrapper>
          <p>13.02 - 20.02</p>
        </WeekWrapper>
      </Week>
      <MeetingWrapper>
        <DayLink to="/psycho/week/week-day">
          <h1>Poniedziałek</h1>
          <p>
            liczba spotkań - <strong>5</strong>
          </p>
        </DayLink>
        <DayLink to="/psycho/week/week-day">
          <h1>Wtorek</h1>
          <p>
            liczba spotkań - <strong>3</strong>
          </p>
        </DayLink>
        <DayLink to="/psycho/week/week-day">
          <h1>Środa</h1>
          <p>
            liczba spotkań - <strong>4</strong>
          </p>
        </DayLink>
        <DayLink to="/psycho/week/week-day">
          <h1>Czwartek</h1>
          <p>
            liczba spotkań - <strong>2</strong>
          </p>
        </DayLink>
        <DayLink to="/psycho/week/week-day">
          <h1>Piątek</h1>
          <p>
            liczba spotkań - <strong>1</strong>
          </p>
        </DayLink>
      </MeetingWrapper>
    </PageWrapper>
  </PsychoTemplate>
);

export default WeekPage;
