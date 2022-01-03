import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
`;

export const Loader = styled.div`
  width: 110px;
  height: 110px;
  background: ${({ theme }) => theme.colors.accentBlue};
  border-radius: 50%;
  position: relative;
  animation: ${rotate} 1s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 65%;
    height: 65%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.accentGreen};
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 30%;
    height: 30%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.accentGreen};
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.l};
`;
