import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  border-radius: 3rem;
  width: 95%;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  left: 2.6%;
  bottom: 2.5%;
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  width: 100%;
  padding-left: 2rem;

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

export const StyledSidebarLink = styled(SidebarLink)`
  padding-right: 1rem;
  margin-right: 0;
`;
