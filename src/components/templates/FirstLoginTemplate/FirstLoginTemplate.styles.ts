import styled from 'styled-components';

interface Props {
  icon: string;
}

export const Wrapper = styled.div`
  overflow-x: hidden;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999999999;
  background-color: ${({ theme }) => theme.colors.accentBrown};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const WelcomeButton = styled.button<Props>`
  height: 6rem;
  width: 6rem;
  bottom: 8%;
  position: fixed;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  border-radius: 7rem;
  background-size: 75%;
  background-position: center;
  cursor: pointer;
  margin-bottom: 5rem;
  border: none;
  transform: translateY(50%);
`;
