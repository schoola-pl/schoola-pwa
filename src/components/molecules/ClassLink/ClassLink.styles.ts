import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
  min-height: 12rem;
  width: 99%;
  background-color: white;
  border-radius: 2rem;
  margin-top: 1rem;
  box-shadow: -2px 4px 22px -14px rgba(115, 124, 142, 0.5);
  display: flex;
  text-decoration: none;
  color: black;
  border: 3px solid white;
  transition: border-color 0.1s cubic-bezier(0.52, 0.86, 0.55, 0.93);

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentGreen};
    box-shadow: -2px 4px 22px -8px rgba(115, 124, 142, 0.5);
    cursor: pointer;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;

  div {
    display: flex;
    margin-right: 1rem;
    align-items: center;
    transform: translateX(-100%);

    @media (min-width: 1281px) {
      transform: translateX(-0%);
    }
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: black;
    margin-right: 1rem;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.l};

    strong {
      color: ${({ theme }) => theme.colors.accentBlue};
    }
  }
`;
