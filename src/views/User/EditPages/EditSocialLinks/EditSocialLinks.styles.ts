import styled from 'styled-components';

export const Heading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  li {
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.innerStyles.box};
    background-color: white;
    width: 90%;
    display: grid;
    position: relative;
    grid-template-columns: 80% 30%;
    align-items: center;
  }

  h1 {
    margin-left: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
