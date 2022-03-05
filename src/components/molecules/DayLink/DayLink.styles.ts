import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
  width: 100%;
  margin-bottom: 3rem;
  background-color: white;
  border-radius: 2rem;
  box-shadow: ${({ theme }) => theme.innerStyles.box};
  border-bottom: 2px solid ${({ theme }) => theme.colors.accentGreen};
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: black;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  p {
    display: flex;
    padding-right: 3rem;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.xs};

    strong {
      margin-left: 0.5rem;
      color: white;
      padding: 0.5px 5px;
      background-color: ${({ theme }) => theme.colors.accentBlue};
      border-radius: 5px;
    }

    &::after {
      font-size: ${({ theme }) => theme.fontSize.s};
      content: '>';
      padding-left: 2rem;
    }
  }
`;
