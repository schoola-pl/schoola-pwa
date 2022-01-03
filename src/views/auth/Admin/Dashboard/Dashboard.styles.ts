import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-left: 25rem;
`;

export const Heading = styled.h1`
  margin: 3rem 3rem 0;
  font-size: 2.6rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-template-rows: auto;
  padding: 4rem;
  grid-gap: 4rem;

  & > div:nth-child(2) {
    grid-row: 1/3;
    grid-column: 2/3;
  }
`;
