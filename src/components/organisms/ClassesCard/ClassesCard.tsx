import { ClassesWrapper, Heading, TitleWrapper, Wrapper } from './ClassesCard.styles';
import ClassLink from 'components/molecules/ClassLink/ClassLink';
import React, { useState } from 'react';
import { storeRoot, useGetClassesQuery } from '../../../store';
import { useSelector } from 'react-redux';
import { schoolClass } from '../../../types/school';
import Loading from '../../molecules/Loading/Loading';
import { NavLink } from 'react-router-dom';

const ClassesCard: React.FC = () => {
  const [currentPage, setPage] = useState(1);
  const user = useSelector((store: storeRoot) => store.user);
  const classes = useGetClassesQuery({ pagination: true, page: currentPage, schoolId: user?.schoolId || null });

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
        ) : classes.data.data.length > 0 ? (
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
            }) => <ClassLink key={id} classLevel={classLevel} classLetter={className} numberOfStudents={usersCount.length} />
          )
        ) : (
          <>
            <p style={{ margin: '10px 0 5px 0', fontSize: '1.8rem' }}>Ależ tu świeci pustkami!</p>
            <NavLink style={{ margin: 0, fontSize: '1.3rem', color: 'black', textDecoration: 'underline' }} to="manage/add-class">
              Dodaj klasę tutaj!
            </NavLink>
          </>
        )}
        {classes.isSuccess && classes.data.meta.pagination.pageCount > currentPage && currentPage >= 1 ? <p onClick={fetchNextPage}>Więcej</p> : null}
        {currentPage > 1 ? <p onClick={fetchPrevPage}>Mniej</p> : null}
      </ClassesWrapper>
    </Wrapper>
  );
};

export default ClassesCard;
