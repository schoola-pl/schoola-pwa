import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 57% 43%;
  grid-template-rows: auto;
  grid-gap: 2rem;
  margin-bottom: 4rem;

  & > div {
    width: 100%;
  }

  & > div:nth-child(3) {
    grid-row: 1/3;
    grid-column: 1/2;
  }
`;
