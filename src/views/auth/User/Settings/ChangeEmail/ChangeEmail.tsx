import { Wrapper, InputWrapper, SubmitButton } from '../Settings.styles';

const ChangeEmail = () => {
  return (
    <Wrapper email={true}>
      <h1>Zmień e-mail</h1>
      <form action="">
        <InputWrapper>
          <label htmlFor="">Obecne hasło</label>
          <input type="e-mail" />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="">Nowe hasło</label>
          <input type="password" />
        </InputWrapper>
        <SubmitButton email={true}>Potwierdź</SubmitButton>
      </form>
    </Wrapper>
  );
};

export default ChangeEmail;
