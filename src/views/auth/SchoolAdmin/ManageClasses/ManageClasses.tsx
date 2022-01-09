import ClassCard from 'components/molecules/ClassCard/ClassCard';
import { AddButton, AmountWrapper, ClassesWrapper, ContentWrapper, Heading, HeadingLink, InnerWrapper, Links, Wrapper } from './ManageClasses.styles';
import AddIcon from 'assets/icons/AddIcon.svg';
import { storeRoot, useGetClassesCountQuery } from '../../../../store';
import { useSelector } from 'react-redux';

const ManageClasses = () => {
  const user = useSelector((store: storeRoot) => store.user);
  const classesCount = useGetClassesCountQuery({ schoolId: user?.schoolId || null });

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
            Łączna liczba klas: <span>{classesCount.isLoading ? 'Liczenie...' : classesCount.data.data.length}</span>
          </h1>
        </AmountWrapper>
        <ClassesWrapper>
          {/*{data.map(({ classYear, classes }: { classYear: string; classes: any }, index: number) => (*/}
          {/*  <ClassCard key={index} classYear={classYear} classes={classes} />*/}
          {/*))}*/}
          <ClassCard classYear="Klasy pierwsze" classLevel={1} />
          <ClassCard classYear="Klasy drugie" classLevel={2} />
          <ClassCard classYear="Klasy trzecie" classLevel={3} />
        </ClassesWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ManageClasses;
