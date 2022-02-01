import { Wrapper, SignatureWrapper, PasswordInfoHeading, PasswordInfoWrapper, Signature } from './GPR.styles';

const GoodPasswordRules = () => (
  <Wrapper>
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
  </Wrapper>
);

export default GoodPasswordRules;
