import { Wrapper, TitleWrapper, Heading, ClassesWrapper } from './ClassesCard.styles';
import ClassLink from 'components/molecules/ClassLink/ClassLink';

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
