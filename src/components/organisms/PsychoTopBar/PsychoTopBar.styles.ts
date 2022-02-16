import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};

  &::after {
    content: '.';
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.accentGreen};
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
