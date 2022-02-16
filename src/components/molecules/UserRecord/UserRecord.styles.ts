import styled from 'styled-components';

export const PeopleWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-height: 8rem;
  align-items: center;
  border-radius: 1rem;
  width: 95%;
  margin-bottom: 0.5rem;

  &:first-child {
    margin-top: 1rem;
  }

  & > * {
    margin-inline: 0.8rem;
  }
`;

export const Select = styled.select`
  padding: 1.5rem 2rem;
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
