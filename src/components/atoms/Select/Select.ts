import styled from 'styled-components';

const Select = styled.select`
  padding: 1.5rem 2rem;
  background-color: white !important;
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  resize: none;
  border: 2px solid ${({ theme }) => theme.colors.selectedItemGrey};
  transition: border 0.3s linear;
  margin: 2rem 0 2rem 0;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.accentGreen};
  }
`;

export default Select;
