import styled from 'styled-components';

export const StudentResultWrapper = styled.div`
  background-color: white;
  box-shadow: ${({ theme }) => theme.innerStyles.box};
  width: 100%;
  margin-bottom: 1.5rem;
  border-radius: 2rem;
  white-space: nowrap;
  text-decoration: none;
  display: grid;
  grid-template-columns: 20% 50% 30%;
  align-items: center;
  justify-items: center;
  padding: 1rem;

  h1 {
    color: black;
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

export const InfoWrapper = styled.div`
  position: relative;
  border-left: 2px solid ${({ theme }) => theme.colors.accentBlue};
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;

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
    margin: -2px 0 0;
    text-align: left;
    padding: 0;
  }
`;
