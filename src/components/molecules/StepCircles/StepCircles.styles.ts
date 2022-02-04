import styled from 'styled-components';

export const StepCircleWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.div<{ isActive: boolean }>`
  height: 1.5rem;
  width: 1.5rem;
  background-color: #f7f8fa;
  border-radius: 1rem;
  margin-right: 1rem;

  ${({ isActive, theme }) =>
    isActive &&
    `
    background-color: ${theme.colors.accentBlue}
  `}
`;
