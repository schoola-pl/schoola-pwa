import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 0rem 2rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999999;
  background-color: ${({ theme }) => theme.colors.lightBrown};
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

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;

  h1 {
    position: relative;
    font-size: 3.5rem;
    color: ${({ theme }) => theme.colors.accentBlue};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  div {
    padding-left: 0.65rem;
    transform: translateY(-30%);
    display: grid;
    grid-template-rows: 2rem 2rem;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const Day = styled.p`
  color: grey;
`;
