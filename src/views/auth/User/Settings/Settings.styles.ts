import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

export const PageWrapper = styled.div`
  transform: translateY(-5%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Wrapper = styled.div<{ email?: boolean }>`
  background-color: white;
  width: 100%;
  height: 32rem;
  border-radius: 1.5rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  padding-top: 1rem;
  padding-left: 2rem;
  margin-bottom: 5rem;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    transform: translateY(${({ email }) => (email ? '10%' : '0')});
  }
`;

export const SubmitButton = styled(Button)<{ email?: boolean }>`
  margin-right: 1.5rem;
  transform: translateY(${({ email }) => (email ? '75%' : 0)});
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
  margin-bottom: 1rem;

  label {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  input {
    border-radius: 1rem;
    padding: 0.5rem;
    background-color: #f7f8fa;
    border: 2px solid ${({ theme }) => theme.colors.lightGrey};
    color: black;

    &:focus {
      outline: none;
    }
  }
`;
