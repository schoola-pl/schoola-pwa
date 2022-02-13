import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  min-height: 125px;
  grid-template-rows: 1fr 5rem;
  grid-gap: 1rem;
  align-items: center;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 1.5rem;
  padding: 1rem;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const Question = styled.p`
  margin: 0;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 1rem;
`;
export const Decision = styled.div`
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 0;
    width: 25%;
    margin-inline: 0.4rem;
    font-size: 1.3rem;
    height: auto;
    padding: 0.5rem;
  }
`;
