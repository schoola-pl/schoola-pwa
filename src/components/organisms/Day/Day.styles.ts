import styled from 'styled-components';

export const DayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 89%;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #f7f8fa;
  margin-bottom: 2rem;

  div {
    display: flex;
    align-items: center;
  }
`;

export const DayTimeWrapper = styled.div`
  display: flex;

  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  button {
    display: flex;
    align-items: center;
    padding-left: 2.5rem;
    border: none;
    background-color: white;

    &::after {
      content: '>';
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

export const Heading = styled.h1`
  padding-left: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
