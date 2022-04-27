import styled, { css } from 'styled-components';

export const Heading = styled.h1<{ small?: boolean }>`
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  ${({ small }) =>
    small &&
    css`
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      font-size: ${({ theme }) => theme.fontSize.s};
    `}
`;

export const LinksList = styled.div`
  margin-top: 1rem;
  position: relative;
  width: 95%;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoWrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    border: none;
    padding: 1.5rem;
    border-radius: 1rem;
    color: white;
    background-color: ${({ theme }) => theme.colors.accentBlue};
  }
`;
