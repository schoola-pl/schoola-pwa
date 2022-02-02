import styled from 'styled-components';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

export const Wrapper = styled.form`
  height: 12rem;
  border-radius: 2rem;
  width: 90%;
  transform: translateY(-20%);
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  overflow: hidden;
`;

export const StyledInput = styled.input`
  border: none;
  padding: 1rem;
  height: 100%;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const SendMessageButton = styled(SidebarLink)`
  height: 4rem;
  width: 4rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};
`;

export const MessageActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledRadio = styled.input`
  border-radius: 1px;
  height: 2rem;
  width: 2rem;
`;

export const InputWrapper = styled.div`
  height: 6.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  border-bottom: 2px solid ${({ theme }) => theme.colors.selectedItemGrey};
`;

export const StyledLabel = styled.label`
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  transform: translateX(-10%);

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledName = styled.p`
  color: ${({ theme }) => theme.colors.accentGreen};
  padding-left: 0.2rem;
`;
