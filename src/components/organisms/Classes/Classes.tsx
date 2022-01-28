import ClassCard from 'components/molecules/ClassCard/ClassCard';
import { AmountWrapper, ClassesWrapper } from 'views/auth/SchoolAdmin/ManageClasses/ManageClasses.styles';
import { useSelector } from 'react-redux';
import { storeRoot, useGetClassesCountQuery } from 'store';

const Classes = () => {
  const user = useSelector((store: storeRoot) => store.user);
  const classesCount = useGetClassesCountQuery({ schoolId: user?.schoolId || null });

  return (
    <>
      <AmountWrapper>
        <h1>
          Łączna liczba klas: <span>{classesCount.isLoading ? 'Liczenie...' : classesCount.data.data.length}</span>
        </h1>
      </AmountWrapper>
      <ClassesWrapper>
        <ClassCard classYear="Klasy pierwsze" classLevel={1} />
        <ClassCard classYear="Klasy drugie" classLevel={2} />
        <ClassCard classYear="Klasy trzecie" classLevel={3} />
      </ClassesWrapper>
    </>
  );
};

export default Classes;
