import styled, { css } from 'styled-components';

const Button = styled.button<{ isIcon?: boolean; isDisabled?: boolean; isDanger?: boolean; isRed?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.accentGreen};
  width: 90%;
  padding: 0 2.5rem;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s, opacity 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    cursor: pointer;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    `
    opacity: 0.6;
  pointer-events: none;
  &:hover {
    cursor: not-allowed;
  }
   `};

  ${({ isDanger, theme }) =>
    isDanger &&
    `
    background: ${theme.colors.accentRed};
    opacity: 0.8;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
      background: ${theme.colors.accentRed};
    }
    `}

  ${({ isIcon }) =>
    isIcon &&
    `
  width: fit-content;
  padding: 1.3rem;
  border-radius: 15px;

  * {
  width: 20px;
  height: 20px;
  }

  `}

  ${({ isRed }) =>
    isRed &&
    css`
      background-color: ${({ theme }) => theme.colors.accentRed};

      &:hover {
        background-color: ${({ theme }) => theme.colors.lightRed};
      }
    `}
`;

export default Button;
