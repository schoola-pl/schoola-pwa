import { FPWrapper, InputWrapper, SubmitButton } from '../Settings.styles';

const ChangePassword = () => {
  return (
    <FPWrapper>
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
    </FPWrapper>
  );
};

export default ChangePassword;
