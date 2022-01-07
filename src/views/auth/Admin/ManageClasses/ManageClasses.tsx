import AdminTemplate from 'components/templates/AdminTemplate/AdminTemplate';
import ClassCard from 'components/molecules/ClassCard/ClassCard';
import { Wrapper, Heading, ContentWrapper, Links, HeadingLink, AmountWrapper, ClassesWrapper } from './ManageClasses.styles';
import { data } from './data';

interface Props {
  classYear?: string;
  classes: { name?: string; amountOfStudents?: number };
}

const ManageClasses: React.FC<Props> = ({ classYear, classes: { name, amountOfStudents } }) => (
  <AdminTemplate>
    <Wrapper>
      <Heading>Zarządzaj użytkownikami</Heading>
      <ContentWrapper>
        <Links>
          <HeadingLink>klasy</HeadingLink>
          <HeadingLink>role</HeadingLink>
          <HeadingLink>wszystkie konta</HeadingLink>
        </Links>
        <AmountWrapper>
          <h1>
            Łączna ilosć klas: <span>16</span>
          </h1>
        </AmountWrapper>
        <ClassesWrapper>
          {data.map(() => (
            <ClassCard classYear={classYear} name={name} amountOfStudents={amountOfStudents} />
          ))}
        </ClassesWrapper>
      </ContentWrapper>
    </Wrapper>
  </AdminTemplate>
);

export default ManageClasses;
