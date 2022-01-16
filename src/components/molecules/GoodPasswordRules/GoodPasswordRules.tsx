import styled from 'styled-components';

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

const GoodPasswordRules = () => (
  <>
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
  </>
);

export default GoodPasswordRules;
