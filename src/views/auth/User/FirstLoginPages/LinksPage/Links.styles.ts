import styled from 'styled-components';
import Select from 'react-select';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

export const StyledInput = styled.input`
  border: none;
  background-color: white;
  padding: 1.25rem;
  border-radius: 1rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  outline: none;
`;

export const StyledSelect = styled(Select)`
  border-radius: 4rem;
  border: none;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  margin-right: 1rem;
  background-color: white;
`;

export const StyledButton = styled(SidebarLink)`
  background-color: ${({ theme }) => theme.colors.accentGreen};
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: 5rem;
  justify-content: flex-start;
  background-color: white;
  border-radius: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.accentBlue};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  margin-bottom: 0.5rem;

  p {
    padding-right: 1rem;
  }
`;
