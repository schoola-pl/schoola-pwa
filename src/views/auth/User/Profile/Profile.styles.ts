import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  transform: translateY(-5%);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 57% 43%;
  grid-template-rows: auto;
  grid-gap: 2rem;
  width: min(100%, 400px);
  justify-content: center;
  padding-inline: 1rem;
  margin-bottom: 1rem;

  & > div {
    width: 100%;
  }

  & > div:nth-child(3) {
    grid-row: 1/3;
    grid-column: 1/2;
  }
`;
