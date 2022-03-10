import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin: 4rem 3rem 2rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #eceff7;
`;

export const CardWrapper = styled.div`
  border-radius: 1rem;
  padding: 1rem 2rem;
  margin: 1rem 3rem;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 10% 90%;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  grid-gap: 2rem;
`;
