import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: 2rem;
  align-items: center;
`;
export const MeetingWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const DayLink = styled(Link)`
  width: 100%;
  margin-bottom: 3rem;
  background-color: white;
  border-radius: 2rem;
  box-shadow: ${({ theme }) => theme.innerStyles.box};
  border-bottom: 2px solid ${({ theme }) => theme.colors.accentGreen};
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 2rem;
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
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;

  & > p {
    font-size: 1.7rem;
    margin: 0;
  }
`;

export const WeekWrapper = styled.div`
  color: white;
  border-radius: 0.7rem;
  padding: 0.8rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.accentBlue};
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 1rem;
`;
