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
`;

export const Text = styled.p`
  margin: 0;
  color: black;
  font-weight: bold;
  letter-spacing: 0.4px;
  font-size: ${({ theme }) => theme.fontSize.l};
`;
