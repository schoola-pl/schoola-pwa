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
