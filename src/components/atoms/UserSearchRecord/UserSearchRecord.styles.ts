import styled from 'styled-components';

export const StudentResultWrapper = styled.div`
  background-color: white;
  box-shadow: ${({ theme }) => theme.innerStyles.box};
  height: 7.5rem;
  margin-bottom: 1.5rem;
  border-radius: 2rem;
  display: grid;
  grid-template-columns: 20% 55% 50%;
  white-space: nowrap;
  align-items: center;
  text-decoration: none;

  &::after {
    content: '>';
    font-size: 2rem;
    margin-left: 4rem;
  }

  h1 {
    margin: 0.75rem;
    color: black;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    border-right: 3px solid ${({ theme }) => theme.colors.accentBlue};
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-left: 0.5rem;

  h1 {
    margin: 0;
    padding: 0;
    text-transform: none;
    border: none !important;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  p {
    color: grey;
    margin: 0;
  }
`;
