import styled from 'styled-components';

const SmallButton = styled.button<{ isGood?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  padding: 0;
  background: ${({ theme }) => theme.colors.accentGreen};
  width: 110px;
  height: 23.5px;
  border: none;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 500;
  opacity: 0.8;
  pointer-events: none;

  ${({ isGood, theme }) =>
    isGood &&
    `
    opacity: 1;
    transition: background-color 0.3s;
    pointer-events: all;
    &:hover {
      background-color: ${theme.colors.lightGreen};
      cursor: pointer;
    }
  `}
`;

export default SmallButton;
