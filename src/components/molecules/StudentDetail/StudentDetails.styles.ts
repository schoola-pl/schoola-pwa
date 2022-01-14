import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 95.8%;
  height: 8.5rem;
  background-color: white;
  margin: 2rem 0rem 0 5rem;
  border-radius: 1rem;
  display: flex;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  align-items: center;
`;

export const StudentBox = styled(SidebarLink)`
  background-color: #b8d0fc;
  border-radius: 1rem;
  height: 4.75rem;
  width: 4.75rem;
  padding: 1rem;
  margin-left: 2rem;
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
  margin-left: 7.5rem;
  margin-right: 14rem;
`;

export const Role = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-right: 16.5rem;
`;

export const Number = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: center;
  margin-right: 10rem;
`;

export const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: center;
  margin-right: 20rem;
`;
