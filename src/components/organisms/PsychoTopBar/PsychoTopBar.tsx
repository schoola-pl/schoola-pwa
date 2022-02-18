import { Wrapper, Logo, DateWrapper, Day } from './PsychoTopBar.styles';

const PsychoTopBar = () => (
  <Wrapper>
    <Logo>schoola</Logo>
    <DateWrapper>
      <h1>9</h1>
      <div>
        <Day>Piątek</Day>
        <p>Marzec 2022</p>
      </div>
    </DateWrapper>
  </Wrapper>
);

export default PsychoTopBar;
