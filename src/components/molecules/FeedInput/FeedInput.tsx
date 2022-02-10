import { InputWrapper, StyledPicture, ProfilePicture, StyledInput, SendMessageButton } from './FeedInput.styles';
import SendIcon from 'assets/icons/SendIcon.svg';

const FeedInput = () => (
  <InputWrapper>
    <section>
      <StyledPicture>
        <ProfilePicture icon="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa1%2F8a%2Fef%2Fa18aefbb385e8a4d755d2885fa2d2cc2.jpg&f=1&nofb=1" />
      </StyledPicture>
      <StyledInput type="text" placeholder="Napisz coś..." />
    </section>
    <SendMessageButton icon={SendIcon} />
  </InputWrapper>
);

export default FeedInput;
