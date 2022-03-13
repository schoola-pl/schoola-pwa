import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

interface Props {
  name?: string;
}

export const StyledListItem = styled(NavLink)<Props>`
  display: flex;
  align-items: center;
  text-decoration: none;
  // margin-right: 1.5rem;

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
