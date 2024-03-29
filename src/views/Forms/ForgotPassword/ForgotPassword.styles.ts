import styled from 'styled-components';
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledInput = styled(Input)`
  margin-bottom: 2rem;
  margin-top: 4rem;
  width: 90%;
`;

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.accentBlue};
  text-decoration: underline;
`;
