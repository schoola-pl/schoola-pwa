import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem;
  margin: 1.5rem 3rem 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

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

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: -5rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 3px solid #eceff7;
  align-items: flex-start;
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-right: 15rem;
`;

export const ParagraphsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 15rem;
`;
