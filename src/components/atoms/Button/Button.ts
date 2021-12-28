import styled from 'styled-components';

const Button = styled.button`
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
  text-transform: uppercase;

  &:hover {
    background-color: #33aa45;
    cursor: pointer;
  }
`;

export default Button;
