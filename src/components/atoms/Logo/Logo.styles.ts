import styled from 'styled-components';

export const Wrapper = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m};

  &::after {
    content: '.';
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.accentGreen};
  }
`;
