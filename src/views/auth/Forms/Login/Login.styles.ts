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

export const Form = styled.form`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
