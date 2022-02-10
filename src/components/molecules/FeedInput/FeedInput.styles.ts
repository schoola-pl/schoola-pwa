import styled from 'styled-components';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

export const InputWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 1.75rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  margin-bottom: 3rem;

  section {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }
`;

export const SendMessageButton = styled(SidebarLink)`
  height: 4rem;
  width: 4rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};
`;

interface Props {
  icon?: string;
}

export const ProfilePicture = styled.div<Props>`
  width: 85%;
  height: 85%;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: white;
  border-radius: inherit;
  border: none;
  background-size: cover;
  background-position: center;
  z-index: 9999999;
`;

export const StyledPicture = styled.div`
  margin-right: 1rem;
  height: 4.2rem;
  width: 4.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10rem;
  background: linear-gradient(90deg, rgba(184, 208, 252, 1) 0%, rgba(91, 117, 166, 1) 0%, rgba(85, 171, 103, 1) 100%);
`;

export const StyledInput = styled.input`
  border-radius: 1rem;
  padding: 1rem;
  border: none;
  background-color: #f7f8fa;
  color: black;
  &:focus {
    outline: none;
  }
`;
