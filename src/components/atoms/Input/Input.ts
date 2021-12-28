import styled from 'styled-components';

const Input = styled.input<{ error?: boolean }>`
  padding: 1.5rem 3.5rem;
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  resize: none;
  border: 2px solid ${({ theme }) => theme.colors.selectedItemGrey};
  transition: border 0.3s linear;

  ${({ error, theme }) =>
    error &&
    `
    border: 2px solid ${theme.colors.accentRed};
  `}
  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.accentGreen};
`;

export default Input;
