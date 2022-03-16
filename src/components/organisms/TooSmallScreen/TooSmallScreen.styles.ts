import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;

  h1,
  p {
    text-align: center;
    margin: 0;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  p {
    margin-top: 1rem;
    letter-spacing: 0.2rem;
    font-size: 1.5rem;
  }

  div {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 55%;
  }
`;

export const LogoutButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.accentRed};
  margin-left: 2rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentRed};
    opacity: 0.9;
  }
`;
