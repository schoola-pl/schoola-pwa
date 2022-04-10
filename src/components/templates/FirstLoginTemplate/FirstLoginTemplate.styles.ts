import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  overflow-x: hidden;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.accentBrown};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

export const WelcomeButton = styled.button<{
  icon: string;
  isDisabled: boolean;
}>`
  height: 6rem;
  width: 6rem;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  border-radius: 7rem;
  background-size: 75%;
  background-position: center;
  cursor: pointer;
  border: none;
  opacity: 1;
  transition: opacity 0.15s ease-in-out;

  ${({ isDisabled }) =>
    isDisabled &&
    `
    opacity: 0.6;
    cursor: default;
    pointer-events: none;
     `}
`;

const fadeInOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Animated = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div {
    animation: ${fadeInOut} 0.5s ease-in-out;
  }
`;
