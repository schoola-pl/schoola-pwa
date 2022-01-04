import { Wrapper, TitleWrapper, Heading, ClassLink, ClassesWrapper } from './ClassesCard.styles';

const ClassesCard = () => (
  <Wrapper>
    <TitleWrapper>
      <Heading>Klasy</Heading>
    </TitleWrapper>
    <ClassesWrapper>
      <ClassLink />
      <ClassLink />
      <ClassLink />
      <ClassLink />
      <ClassLink />
    </ClassesWrapper>
  </Wrapper>
);

export default ClassesCard;
