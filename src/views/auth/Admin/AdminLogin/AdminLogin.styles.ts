import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLogo = styled(Logo)`
  margin-bottom: 30rem;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
