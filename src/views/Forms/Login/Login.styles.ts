import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputWrapper = styled.div<{ error?: boolean; small?: boolean }>`
  padding: 1.5rem 3.5rem;
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  resize: none;
  border: 2px solid ${({ theme }) => theme.colors.selectedItemGrey};
  transition: border 0.3s linear;
  width: 100%;
  margin-block: 10px;
  display: flex;
  max-height: 5.5rem;
  align-items: center;
  position: relative;

  input {
    border: none;
    font-size: ${({ theme }) => theme.fontSize.s};
    outline: none;
    max-width: 20rem;
  }
`;

export const Form = styled.form`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
`;

export const StyledButton = styled(Button)`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
`;

export const StyledInput = styled(Input)`
  margin-block: 10px;
`;

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.accentBlue};
  text-decoration: underline;
  padding-top: 1.5rem;
`;
