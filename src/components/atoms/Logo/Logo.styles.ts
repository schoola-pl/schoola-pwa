import styled from 'styled-components';

export const Wrapper = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};

  &::after {
    content: '.';
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.accentGreen};
  }
`;
