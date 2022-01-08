import ClassCard from 'components/molecules/ClassCard/ClassCard';
import { AddButton, AmountWrapper, ClassesWrapper, ContentWrapper, Heading, HeadingLink, InnerWrapper, Links, Wrapper } from './ManageClasses.styles';
import { data } from './data';
import AddIcon from 'assets/icons/AddIcon.svg';

const ManageClasses = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Heading>Zarządzaj użytkownikami</Heading>
        <AddButton as="a" icon={AddIcon} />
      </InnerWrapper>
      <ContentWrapper>
        <Links>
          <HeadingLink to={'/school-admin/manage'}>klasy</HeadingLink>
          <HeadingLink to={'/school-admin/manage/add-roles'}>role</HeadingLink>
          <HeadingLink to={'/school-admin/manage/all-accounts'}>wszystkie konta</HeadingLink>
        </Links>
        <AmountWrapper>
          <h1>
            Łączna liczba klas: <span>16</span>
          </h1>
        </AmountWrapper>
        <ClassesWrapper>
          {data.map(({ classYear, classes }: { classYear: string; classes: any }, index: number) => (
            <ClassCard key={index} classYear={classYear} classes={classes} />
          ))}
        </ClassesWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ManageClasses;
