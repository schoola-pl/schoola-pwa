import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';

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
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledButton = styled(Button)<{ error?: boolean }>`
  margin-top: 2rem;

  ${({ error, theme }) =>
    error &&
    `
    background-color: ${theme.colors.accentRed};
    color: ${theme.colors.lightBrown};
    &:hover {
      background-color: ${theme.colors.accentRedDark};
    }
  `}
`;

export const StyledInput = styled(Input)`
  margin-block: 10px;
`;
