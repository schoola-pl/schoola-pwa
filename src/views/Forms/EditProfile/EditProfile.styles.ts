import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

export const Card = styled.div`
  display: flex;
  border: 2px solid ${({ theme }) => theme.colors.selectedItemGrey};
  border-radius: 2rem;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

export const EditProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
