import styled from 'styled-components';

export const Heading = styled.h1`
  margin: 3rem 3rem 0;
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const Links = styled.div`
  width: 100%;
  margin: 2rem 3rem 3rem 3rem;
  display: flex;
  align-items: center;
  padding-top: 1.5rem;
  border-bottom: 3px solid #eceff7;
  transition: all 0.1s linear;

  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.accentGreen};
  }
`;

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

export const HeadingLink = styled.h1`
  position: relative;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  margin-right: 15rem;
  padding-bottom: 0.75rem;
  transition: all 0.1s linear;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.lightGreen};
  }
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

export const ClassesWrapper = styled.div`
  padding-left: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
