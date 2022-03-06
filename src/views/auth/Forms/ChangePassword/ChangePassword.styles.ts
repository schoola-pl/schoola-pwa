import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

export const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Card = styled.div<{ isRestore?: boolean }>`
  display: flex;
  border: 2px solid ${({ theme }) => theme.colors.selectedItemGrey};
  border-radius: 2rem;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ isRestore }) =>
    isRestore &&
    `
    border: 0;
    box-shadow: 0 2px 15px -7px rgba(0, 0, 0, 0.3);
  background-color: white;
  padding: 2rem;
`}
`;

export const CardHeading = styled.h1`
  text-align: left;
  margin-left: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const StyledInput = styled(Input)`
  width: 75%;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 2rem 0 0.5rem 0.5rem;
  display: block;
  width: 75%;
`;

export const SubmitButton = styled(Button)`
  margin-top: 3.5rem;
  width: 75%;
`;
