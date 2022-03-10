import styled from 'styled-components';

export const Hour = styled.div<{ isCanceled?: boolean }>`
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
    background-color: #fcb3b0;
    pointer-events: ${({ isCanceled }) => (isCanceled ? 'none' : 'all')};

    &::after {
      content: 'x';
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export const HoursWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.5rem;
  margin-top: 1rem;

  button#exception {
    border: none;
    border-radius: 1rem;
    color: white;
    height: 4rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.xs};
    background-color: ${({ theme }) => theme.colors.accentBlue};
    position: absolute;
    right: 4rem;
    top: 2rem;
  }
`;
