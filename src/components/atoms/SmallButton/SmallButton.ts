import styled from 'styled-components';

const SmallButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  margin-top: 1rem;
  padding: 0;
  background: ${({ theme }) => theme.colors.accentGreen};
  width: 110px;
  height: 23.5px;
  border: none;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    cursor: pointer;
  }
`;

export default SmallButton;
