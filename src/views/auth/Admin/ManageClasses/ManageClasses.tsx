import AdminTemplate from 'components/templates/AdminTemplate/AdminTemplate';
import ClassCard from 'components/molecules/ClassCard/ClassCard';
import { AmountWrapper, ClassesWrapper, ContentWrapper, Heading, HeadingLink, Links, Wrapper, InnerWrapper, AddButton } from './ManageClasses.styles';
import { data } from './data';
import AddIcon from 'assets/icons/AddIcon.svg';

interface Props {
  classYear: string;
  classes: { name: string; amountOfStudents: number };
}

const ManageClasses: React.FC<Props> = () => {
  return (
    <AdminTemplate>
      <Wrapper>
        <InnerWrapper>
          <Heading>Zarządzaj użytkownikami</Heading>
          <AddButton as="a" href="/add-class" icon={AddIcon} />
        </InnerWrapper>
        <ContentWrapper>
          <Links>
            <HeadingLink to={'/manage/classes'}>klasy</HeadingLink>
            <HeadingLink to={'/manage/roles'}>role</HeadingLink>
            <HeadingLink to={'/manage/all-accounts'}>wszystkie konta</HeadingLink>
          </Links>
          <AmountWrapper>
            <h1>
              Łączna liczba klas: <span>16</span>
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
