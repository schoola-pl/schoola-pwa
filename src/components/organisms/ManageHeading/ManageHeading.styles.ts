import styled from 'styled-components';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

export const Heading = styled.h1`
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const Wrapper = styled.div`
  margin: 3rem 3rem 0;
  display: flex;
  justify-content: space-between;
`;

export const AddButton = styled(SidebarLink)`
  padding: 2.5rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  text-decoration: none;
`;
