import { ClassesWrapper, Heading, TitleWrapper, Wrapper } from './ClassesCard.styles';
import ClassLink from 'components/molecules/ClassLink/ClassLink';
import React, { useState } from 'react';
import { storeRoot, useGetClassesQuery } from '../../../store';
import { useSelector } from 'react-redux';
import { schoolClass } from '../../../types/school';
import Loading from '../../molecules/Loading/Loading';

const ClassesCard: React.FC = () => {
  const [currentPage, setPage] = useState(1);
  const user = useSelector((store: storeRoot) => store.user);
  const classes = useGetClassesQuery({ page: currentPage, schoolId: user?.schoolId || null });

  const fetchNextPage = () => {
    if (classes.isSuccess && classes.data.meta.pagination.pageCount > currentPage && currentPage >= 1) {
      setPage((prev) => ++prev);
    }
  };

  const fetchPrevPage = () => {
    if (currentPage > 1) {
      setPage((prev) => --prev);
    }
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Heading>Klasy</Heading>
      </TitleWrapper>
      <ClassesWrapper>
        {classes.isLoading ? (
          <Loading />
        ) : (
          classes.data.data.map(
            ({
              id,
              attributes: {
                classLevel,
                className,
                users: { data: usersCount }
              }
            }: {
              id: number;
              attributes: { classLevel: schoolClass['classLevel']; className: schoolClass['className']; users: { data: { id: number }[] } };
            }) => <ClassLink key={id} name={`${classLevel}${className}`} numberOfStudents={usersCount.length} />
          )
        )}
        {classes.isSuccess && classes.data.meta.pagination.pageCount > currentPage && currentPage >= 1 ? <p onClick={fetchNextPage}>Więcej</p> : null}
        {currentPage > 1 ? <p onClick={fetchPrevPage}>Mniej</p> : null}
      </ClassesWrapper>
    </Wrapper>
  );
};

export default ClassesCard;
