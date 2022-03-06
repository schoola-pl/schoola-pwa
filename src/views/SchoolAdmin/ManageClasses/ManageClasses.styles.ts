import styled from 'styled-components';

export const ContentWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

export const Wrapper = styled.div`
  padding: 1rem;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

export const AmountWrapper = styled.div`
  padding: 0.2rem 3rem 3rem 3rem;
  display: flex;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  span {
    border-radius: 1rem;
    margin-left: 0.5rem;
    padding: 0.5rem 0.75rem;
    color: white;
    background-color: ${({ theme }) => theme.colors.accentBlue};
  }
`;

export const ClassesWrapper = styled.div<{ columns?: number; isCenter?: boolean }>`
  padding-left: 3rem;
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || '3'}, 1fr);
  ${({ isCenter }) =>
    isCenter &&
    `
    padding: 2rem;
    justify-items: center;
    `}
`;
