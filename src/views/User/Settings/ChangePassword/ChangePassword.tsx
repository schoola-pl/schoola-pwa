import { InputWrapper, SubmitButton, Wrapper } from '../Settings.styles';

const ChangePassword = () => {
  return (
    <Wrapper>
      <h1>Zmień hasło</h1>
      <form>
        <InputWrapper>
          <label htmlFor="old-pass">Obecne hasło</label>
          <input type="password" id="old-pass" />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="new-pass">Nowe hasło</label>
          <input type="password" id="new-pass" />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="new-pass-verify">Potwierdź nowe hasło</label>
          <input type="password" id="new-pass-verify" />
        </InputWrapper>
        <SubmitButton>Zmień</SubmitButton>
      </form>
    </Wrapper>
  );
};

export default ChangePassword;
