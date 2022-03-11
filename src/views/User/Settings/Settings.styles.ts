import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: -3rem;

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.accentBlue};
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const Wrapper = styled.div<{ email?: boolean }>`
  background-color: white;
  width: 100%;
  border-radius: 1.5rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  padding: 2.5rem;
  margin-bottom: 4rem;

  h1 {
    margin: 0 0 1.3rem;
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

export const SubmitButton = styled(Button)<{ email?: boolean }>`
  margin-top: 1rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.3rem;

  label {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    margin-bottom: 0.2rem;
  }

  input {
    border-radius: 1rem;
    padding: 0.7rem 1.2rem;
    font-size: 1.7rem;
    background-color: #f7f8fa;
    border: 2px solid ${({ theme }) => theme.colors.lightGrey};
    color: black;

    &:focus {
      outline: none;
    }
  }
`;

export const LogoutButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.accentRed};
  margin-bottom: 2rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentRed};
    opacity: 0.9;
  }
`;
