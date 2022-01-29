import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  border-radius: 3rem;
  width: 95%;
  height: 9rem;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  left: 2.6%;
  bottom: 2.5%;
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

interface Props {
  name?: string;
}

export const StyledListItem = styled(NavLink)<Props>`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 1.5rem;

  &.active {
    border-radius: 2rem;
    &::after {
      padding-right: 1rem;
      content: '${({ name }) => name}';
      color: white;
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;
