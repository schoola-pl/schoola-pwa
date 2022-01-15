import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 95.8%;
  height: 8.5rem;
  background-color: white;
  margin: 2rem 0rem 0 5rem;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 10% 17.9% 21% 20% 20% 10%;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  align-items: center;
  justify-items: center;
`;

export const BoxWrapper = styled.div`
  display: flex;
`;

export const StudentBox = styled(SidebarLink)`
  background-color: #b8d0fc;
  border-radius: 1rem;
  height: 4.75rem;
  width: 4.75rem;
  padding: 1rem;
`;

export const DeleteBox = styled(SidebarLink)`
  background-color: #fcb3b0;
  border-radius: 1rem;
  height: 4.75rem;
  width: 4.75rem;
  padding: 1rem;
`;

export const EditBox = styled(SidebarLink)`
  background-color: #e8fcd9;
  border-radius: 1rem;
  height: 4.75rem;
  width: 4.75rem;
  padding: 1rem;
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const Role = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const Number = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: center;
`;

export const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: center;
`;
