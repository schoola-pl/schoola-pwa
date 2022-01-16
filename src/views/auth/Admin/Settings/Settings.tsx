import AdminTemplate from 'components/templates/AdminTemplate/AdminTemplate';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin: 4rem 3rem 2rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #eceff7;
`;

const CardWrapper = styled.div`
  border-radius: 1rem;
  height: 65rem;
  width: 114.5rem;
  margin-left: 3rem;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  // align-items: center;
  // justify-items: center;
`;

const PasswordCard = styled.div`
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

const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
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

const PasswordInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0rem;
`;

const Signature = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const SignatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.2rem;
  justify-content: center;
  align-items: center;
`;

const PasswordInfoHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m};
  transform: translateY(25%);
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

const Settings = () => (
  <AdminTemplate>
    <Wrapper>
      <Heading>Ustawienia</Heading>
      <CardWrapper>
        <div>
          <CardHeading>Edytuj profil</CardHeading>
          <PasswordCard></PasswordCard>
        </div>
        <div>
          <CardHeading>Zmień hasło</CardHeading>
          <PasswordCard>
            <PasswordInfoHeading>Dobre hasło składa się z</PasswordInfoHeading>
            <PasswordInfoWrapper>
              <SignatureWrapper>
                <Signature>8+</Signature>
                <div>Znaków</div>
              </SignatureWrapper>
              <SignatureWrapper>
                <Signature>AA</Signature>
                <div>Dużych liter</div>
              </SignatureWrapper>
              <SignatureWrapper>
                <Signature>aa</Signature>
                <div>Małych liter</div>
              </SignatureWrapper>
              <SignatureWrapper>
                <Signature>123</Signature>
                <div>Numerów</div>
              </SignatureWrapper>
              <SignatureWrapper>
                <Signature>@$#</Signature>
                <div>Symboli</div>
              </SignatureWrapper>
            </PasswordInfoWrapper>
            <PasswordForm>
              <Label htmlFor="">Obecne hasło</Label>
              <StyledInput />
              <Label htmlFor="">Nowe hasło</Label>
              <StyledInput />
              <Label htmlFor="">Stare hasło</Label>
              <StyledInput />
            </PasswordForm>
            <SubmitButton>Zatwierdź</SubmitButton>
          </PasswordCard>
        </div>
      </CardWrapper>
    </Wrapper>
  </AdminTemplate>
);

export default Settings;
