import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Week = styled.div`
  width: 100%;
  display: flex;
  padding-left: 2rem;
  align-items: center;
  justify-content: flex-start;
`;

export const WeekWrapper = styled.div`
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
