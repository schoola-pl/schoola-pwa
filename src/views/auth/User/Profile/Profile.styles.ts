import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  heigth: 100vh;
  justify-content: flex-start;
  align-items: center;
`;

export const Grid = styled.div`
  transform: translateY(-10%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  padding: 3rem;
  grid-gap: 2rem;

  & > div:nth-child(3) {
    grid-row: 1/3;
    grid-column: 1/2;
  }

  @media (min-width: 390px) {
    padding-top: 4rem;
    padding-right: 4rem;
  }
`;
