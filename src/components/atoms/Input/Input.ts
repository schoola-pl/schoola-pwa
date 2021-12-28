import styled from 'styled-components';

const Input = styled.input`
padding: 1.5rem 3.5rem;
border: none;
box-sizing: border-box;
box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
border-radius: 5rem;
font-size: ${({ theme }) => theme.fontSize.s};
text-transform: capitalize;
resize: none;
margin-bottom: 3rem;
&:focus {
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.accentGreen};
`;

export default Input;
