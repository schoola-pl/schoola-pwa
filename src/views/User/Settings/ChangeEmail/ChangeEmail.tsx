import { InputWrapper, SubmitButton, Wrapper } from '../Settings.styles';
import { storeRoot } from 'store';
import { useSelector } from 'react-redux';

const ChangeEmail = () => {
  const user = useSelector((state: storeRoot) => state.user);

  return (
    <Wrapper email={true}>
      <h1>Zmień e-mail</h1>
      <form>
        <InputWrapper>
          <label htmlFor="new-email">Nowy adres</label>
          <input type="e-mail" id="new-email" placeholder={user?.email || 'brak'} />
        </InputWrapper>
        <SubmitButton email={true}>Zmień</SubmitButton>
      </form>
    </Wrapper>
  );
};

export default ChangeEmail;
