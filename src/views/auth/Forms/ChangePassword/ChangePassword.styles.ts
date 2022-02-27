import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

export const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
`;

export const Card = styled.div<{ isRestore?: boolean }>`
  display: flex;
  border: 2px solid ${({ theme }) => theme.colors.selectedItemGrey};
  border-radius: 2rem;
  height: 58rem;
  margin: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ isRestore }) =>
    isRestore &&
    `
  background-color: white;
  padding: 2rem;
`}
`;

export const CardHeading = styled.h1`
  text-align: left;
  margin-top: 0.5rem;
  padding: 0 0 0 3rem;
  transform: translateY(30%);
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 1.5rem 0 1.5rem 0.5rem;
`;

export const SubmitButton = styled(Button)`
  margin-top: 3.5rem;
  transform: translateY(-30%);
`;

export const StyledInput = styled(Input)`
  width: 40rem;
`;
