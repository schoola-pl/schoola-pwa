import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const Card = styled.div`
  display: flex;
  border: 2px solid ${({ theme }) => theme.colors.selectedItemGrey};
  border-radius: 2rem;
  height: 58rem;
  margin: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CardHeading = styled.h1`
  text-align: left;
  margin-top: 0.5rem;
  padding: 0 0 0 3rem;
  transform: translateY(30%);
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

const StyledInput = styled(Input)`
  width: 40rem;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 1.5rem 0 1.5rem 0.5rem;
`;

const SubmitButton = styled(Button)`
  margin-top: 3.5rem;
  transform: translateY(-30%);
`;

const EditProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5.5rem;
`;

const EditProfile = () => (
  <div>
    <CardHeading>Edytuj profil</CardHeading>
    <Card>
      <EditProfileForm>
        <Label>E-mail</Label>
        <StyledInput />
        <Label>Imię</Label>
        <StyledInput />
        <Label>Nazwisko</Label>
        <StyledInput />
        <Label>Data urodzenia</Label>
        <StyledInput type="date" />
      </EditProfileForm>
      <SubmitButton>Zatwierdź</SubmitButton>
    </Card>
  </div>
);

export default EditProfile;
