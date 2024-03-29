import styled from 'styled-components';

export const Hour = styled.div<{ isCanceled?: boolean; isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  border-radius: 1rem;
  background-color: #f7f8fa;
  height: 2.8rem;
  width: 13rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  text-decoration: ${({ isCanceled }) => (isCanceled ? 'line-through' : 'none')};

  button {
    border: none;
    color: white;
    margin-left: 2rem;
    border-radius: 1rem;
    height: 2.3rem;
    width: 2.3rem;
    background-color: ${({ theme }) => theme.colors.accentBlue};
    cursor: pointer;
    opacity: 0.5;

    &::after {
      content: '✓';
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  ${({ isActive }) =>
    isActive &&
    `
    button {
    opacity: 1;
    }
  `}
`;
export const HoursWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 1rem;
  grid-gap: 2.5rem;
`;
