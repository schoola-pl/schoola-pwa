import { Wrapper, TitleWrapper, Heading, ClassesWrapper } from './ClassesCard.styles';
import ClassLink from 'components/molecules/ClassLink/ClassLink';

const mockClasses = [
  { name: '1A', numberOfStudents: 32 },
  { name: '1B', numberOfStudents: 35 },
  { name: '1C', numberOfStudents: 31 },
  { name: '1D', numberOfStudents: 34 },
  { name: '1E', numberOfStudents: 28 },
  { name: '1E', numberOfStudents: 28 },
  { name: '1E', numberOfStudents: 28 },
  { name: '1E', numberOfStudents: 28 }
];

const ClassesCard = () => (
  <Wrapper>
    <TitleWrapper>
      <Heading>Klasy</Heading>
    </TitleWrapper>
    <ClassesWrapper>
      {mockClasses.map((mock) => (
        <ClassLink name={mock.name} numberOfStudents={mock.numberOfStudents} />
      ))}
    </ClassesWrapper>
  </Wrapper>
);

export default ClassesCard;
