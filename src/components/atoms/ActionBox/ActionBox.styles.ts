import SidebarLink from '../SidebarLink/SidebarLink';
import styled from 'styled-components';

const Box = styled(SidebarLink)`
  border-radius: 1rem;
  height: 4.75rem;
  width: 4.75rem;
  padding: 1rem;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export default Box;
