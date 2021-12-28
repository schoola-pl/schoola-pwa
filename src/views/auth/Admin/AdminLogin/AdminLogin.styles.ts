import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';
import Button from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLogo = styled(Logo)`
  margin-top: 12rem;
`;

export const Form = styled.form`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  margin-top: 2rem;
`;
