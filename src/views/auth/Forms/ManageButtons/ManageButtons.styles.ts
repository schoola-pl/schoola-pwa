import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
`;

export const ManageButton = styled.button`
  margin-right: 2rem;
  background-color: white;
  border-radius: 1rem;
  width: 11.5rem;
  height: 5rem;
  text-align: center;

  transition: 0.1s all ease-in-out;

  &:hover {
    cursor: pointer;
    color: white;
  }
`;

export const DeleteClassButton = styled(ManageButton)`
  border: none;
  background-color: ${({ theme }) => theme.colors.accentRed};
  color: white;

  &:hover {
    opacity: 0.9;
  }
`;

export const AddStudentButton = styled(ManageButton)`
  border: 2px solid ${({ theme }) => theme.colors.accentGreen};
  color: ${({ theme }) => theme.colors.accentGreen};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentGreen};
  }
`;

export const ModalInfoWrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    margin-bottom: 2rem;
  }
`;

export const CancelButton = styled(ManageButton)`
  margin-right: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  color: white;

  &:hover {
    cursor: pointer;
    color: white;
    opacity: 0.9;
  }
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 1.5rem 0 1rem 0.5rem;
`;

export const StyledInput = styled(Input)`
  width: 45rem;
`;

export const Select = styled.select`
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  resize: none;
  border: 2px solid ${({ theme }) => theme.colors.selectedItemGrey};
  transition: border 0.3s linear;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.accentGreen};
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CancelAddingStudent = styled(Button)`
  margin-left: 1rem;
  background-color: ${({ theme }) => theme.colors.accentRed};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentRed};
    opacity: 0.9;
  }
`;

export const ModalButtonsWrapper = styled(ButtonWrapper)`
  margin-right: 0;
  margin-top: 3rem;
`;
