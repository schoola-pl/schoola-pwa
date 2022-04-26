import styled from 'styled-components';

export const Heading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

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
