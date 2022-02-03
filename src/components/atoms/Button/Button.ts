import styled from 'styled-components';

const Button = styled.button<{ isIcon?: boolean; isDisabled?: boolean; isDanger?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  padding: 0;
  background: ${({ theme }) => theme.colors.accentGreen};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    cursor: pointer;
  }

  ${({ isDisabled, theme }) =>
    isDisabled &&
    `
  background: ${theme.colors.lightGrey};
  pointer-events: none;
  &:hover {
  cursor: not-allowed;
    background: ${theme.colors.selectedItemGrey};
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
  width: 100%;
  height: 100%;
  }
`}
`;

export default Button;
