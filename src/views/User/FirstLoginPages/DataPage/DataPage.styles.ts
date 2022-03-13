import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';

export const FormWrapper = styled.div`
  width: 100%;
  padding: 1rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 2rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 1.5rem 0 1.5rem 0.5rem;
`;

export const StyledInput = styled(Input)`
  width: 100%;
`;
export const LawWrapper = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
  width: 90%;
`;
export const LawLabel = styled(Label)`
  font-size: ${({ theme }) => theme.fontSize.xs};
`;
export const Statute = styled.a`
  text-decoration: none;

  &::after {
    content: 'regulamin';
    color: ${({ theme }) => theme.colors.accentBlue};
  }
`;
export const PrivacyPolicy = styled.a`
  text-decoration: none;

  &::after {
    content: 'politykę prywatności';
    color: ${({ theme }) => theme.colors.accentBlue};
  }
`;
export const LawCheckbox = styled.input`
  grid-column: 1 / 2;
  grid-row: 1 / 1;
  height: 1.5rem;
  width: 1.5rem;

  &:checked {
    background-color: ${({ theme }) => theme.colors.accentGreen};
  }
`;
