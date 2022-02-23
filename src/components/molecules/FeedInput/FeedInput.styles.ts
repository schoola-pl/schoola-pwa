import styled from 'styled-components';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

export const InputWrapper = styled.form`
  width: 90%;
  display: grid;
  grid-template-columns: 7rem 1fr 7rem;
  align-items: center;
  justify-items: center;
  background-color: white;
  border-radius: 1.75rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  margin-bottom: 3rem;
  padding-block: 1rem;

  input {
    width: 100%;
  }

  button {
    margin: 0;
  }
`;

export const SendMessageButton = styled(SidebarLink)`
  height: 4rem;
  width: 4rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};
`;

export const ProfilePicture = styled.div`
  width: 85%;
  height: 85%;
  position: relative;
  border-radius: inherit;
  border: none;
  background-size: cover;
  background-position: center;
  z-index: 9999999;
  overflow: hidden;

  img {
    min-width: 100%;
    height: 100%;
  }
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
