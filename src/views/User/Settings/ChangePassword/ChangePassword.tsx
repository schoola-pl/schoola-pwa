import { Wrapper, InputWrapper, SubmitButton } from '../Settings.styles';

const ChangePassword = () => {
  return (
    <Wrapper>
      <h1>Zmień hasło</h1>
      <form action="">
        <InputWrapper>
          <label htmlFor="">Obecne hasło</label>
          <input type="password" />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="">Nowe hasło</label>
          <input type="password" />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="">Potwierdź hasło</label>
          <input type="password" />
        </InputWrapper>
        <SubmitButton>Potwierdź</SubmitButton>
      </form>
    </Wrapper>
  );
};

export default ChangePassword;
