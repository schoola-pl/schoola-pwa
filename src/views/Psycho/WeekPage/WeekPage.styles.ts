import styled from 'styled-components';

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

export const Week = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  font-size: 1.7rem;

  .arrows {
    font-size: 2rem;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid #ccc;
    color: #ccc;
  }

  .active {
    color: #000;
    border: 2px solid #000;
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
