import styled from 'styled-components';

const Button = styled.button<{ isIcon?: boolean; isDisabled?: boolean }>`
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
  &:hover {
  cursor: not-allowed;
    background: ${theme.colors.selectedItemGrey};
  }
   `};

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
