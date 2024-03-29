import styled from 'styled-components';

export const InterestHeading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const InterestSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const InterestWrapper = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem 2rem;
`;

export const Interest = styled.div`
  height: 4.2rem;
  width: fit-content;
  padding: 1rem 2rem;
  background-color: white;
  border-radius: 3rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  @media (min-width: 390px) {
    height: 5.5rem;
    font-size: 1.1rem;
  }
`;
