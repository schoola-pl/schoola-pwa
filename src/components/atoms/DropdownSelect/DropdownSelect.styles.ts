import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: white;
  border-radius: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.selectedItemGrey};
`;

export const StyledList = styled.ul`
  position: absolute;
  background-color: white;
  width: 8rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center !important;
  border-radius: 1rem;
  list-style: none;
  overflow-y: scroll;

  li {
    width: 100%;
    padding-bottom: 1rem;
    transform: translateX(-55%);
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
