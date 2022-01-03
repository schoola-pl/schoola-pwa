import styled from 'styled-components';
import InfoCard from 'components/molecules/InfoCard/InfoCard';

export const Wrapper = styled.div`
  padding-left: 25rem;
`;

export const Heading = styled.h1`
  margin: 3.5rem;
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const Grid = styled.div`
  display: grid;
  margin-top: 2rem;
  margin-left: 2rem;
  grid-template-columns: repeat(2, 1fr);
`;
export const ClassesWrapper = styled.div`
  width: 50rem;
  height: 67.2rem;
  background-color: white;
  grid-column: 2 / 2;
  border-radius: 2rem;
  margin-left: 4rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
`;
export const TotalClasses = styled(InfoCard)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

export const TotalAccounts = styled(InfoCard)`
  margin-top: 2.1rem;
  grid-column: 1 / 2;
  grid-row: 2 / 2;
`;

export const TotalsGrid = styled.div`
  display: grid;
  grid-template-rows: 2;
  grid-gap: 2rem;
`;
