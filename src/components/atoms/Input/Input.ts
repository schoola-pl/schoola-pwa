import styled from 'styled-components';

const Input = styled.input<{ error?: boolean; small?: boolean }>`
  padding: 1.5rem 3.5rem;
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  resize: none;
  border: 2px solid ${({ theme }) => theme.colors.selectedItemGrey};
  transition: border 0.3s linear;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme, error }) => (error ? theme.colors.accentRed : theme.colors.accentGreen)};
  }

  ${({ error, theme }) =>
    error &&
    `
    border: 2px solid ${theme.colors.accentRed};
  `}
  ${({ small, theme }) =>
    small &&
    `
    border: none;
    border-bottom: 2px solid ${theme.colors.selectedItemGrey};
    border-radius: 0;
    box-shadow: none;
    padding: 1.2rem 1.7rem;
    &:focus {
      border: 0;
      border-bottom: 2px solid ${theme.colors.selectedItemBorderGrey};
    }
  `}
`;

export default Input;
