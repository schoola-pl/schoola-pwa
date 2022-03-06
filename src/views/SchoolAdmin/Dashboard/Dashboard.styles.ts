import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem;
  overflow-y: auto;
`;

export const Heading = styled.h1`
  margin: 3rem 3rem 0;
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-template-rows: auto;
  position: relative;
  margin: 1rem;
  min-height: 50vh;
  padding: 2rem;
  grid-gap: 4rem;

  & > div:nth-child(3) {
    grid-row: 1/3;
    grid-column: 2/3;
  }

  @media (max-width: ${({ theme }) => theme.screenSize.tabletMD}) {
    grid-template-columns: 1fr;
    & > div:nth-child(3) {
      grid-row: 3/4;
      grid-column: 1;
    }
  } ;
`;
