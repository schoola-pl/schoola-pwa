import styled from 'styled-components';

export const Background = styled.div`
  --loadingColor: ${({ theme }) => theme.colors.accentBrown};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--loadingColor);
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  z-index: 9999999999999999;
`;

export const Text = styled.p`
  margin: 0;
  color: black;
  font-weight: bold;
  letter-spacing: 0.4px;
  font-size: clamp(${({ theme }) => theme.fontSize.m}, 2vw, ${({ theme }) => theme.fontSize.l});
  padding-inline: 1.4rem;
  text-align: center;
`;
