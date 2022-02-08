import styled from 'styled-components';

export const Heading = styled.h1`
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin-bottom: 0.5rem;

  span {
    border-radius: 0.5rem;
    margin-left: 0.5rem;
    padding: 0.2rem 0.4rem;
    color: white;
    font-size: 2.2rem;
    background-color: ${({ theme }) => theme.colors.accentBlue};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 3px solid #eceff7;
  align-items: flex-start;
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-right: 15rem;

  &:first-child {
    grid-column: 2;
    padding-left: 3rem;
  }
`;

export const Paragraphs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 7% 17.9% 21% 20% 20% 10%;
  justify-items: center;
  align-content: center;
`;
