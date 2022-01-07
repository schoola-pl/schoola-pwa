import AdminTemplate from 'components/templates/AdminTemplate/AdminTemplate';
import ClassCard from 'components/molecules/ClassCard/ClassCard';
import { AmountWrapper, ClassesWrapper, ContentWrapper, Heading, HeadingLink, Links, Wrapper } from './ManageClasses.styles';
import { data } from './data';

interface Props {
  classYear: string;
  classes: { name: string; amountOfStudents: number };
}

const ManageClasses: React.FC<Props> = () => {
  return (
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
            {data.map(({ classYear, classes }, index) => (
              <ClassCard key={index} classYear={classYear} classes={classes} />
            ))}
          </ClassesWrapper>
        </ContentWrapper>
      </Wrapper>
    </AdminTemplate>
  );
};

export default ManageClasses;
