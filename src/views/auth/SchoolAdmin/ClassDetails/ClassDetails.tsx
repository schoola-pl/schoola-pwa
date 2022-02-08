/* eslint-disable react-hooks/exhaustive-deps */
import { InnerWrapper, Wrapper } from './ClassDetails.styles';
import StudentDetail from 'components/molecules/StudentDetail/StudentDetail';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { storeRoot, useGetUsersByClassQuery } from 'store';
import Loading from '../../../../components/molecules/Loading/Loading';
import { useEffect } from 'react';
import ClassDetailsHeader from 'components/organisms/ClassDetailsHeader/ClassDetailsHeader';
import { useClass } from 'hooks/useClass';

const ClassDetails = () => {
  const { id } = useParams();
  const { checkDoesClassExist } = useClass();
  const classLevel = id?.split('')[0] || '0';
  const className = id?.slice(1) || null;
  const user = useSelector((state: storeRoot) => state.user);
  const navigate = useNavigate();
  const students = useGetUsersByClassQuery({
    schoolId: user?.schoolId || null,
    classLevel,
    className
  });

  useEffect(() => {
    (async () => {
      if (!(await checkDoesClassExist(className || 'none', parseInt(classLevel)))) {
        navigate(-1);
      }
    })();
  }, [id]);

  return (
    <Wrapper>
      <ClassDetailsHeader id={id} students={students} user={user} />
      <InnerWrapper>
        {!students.isLoading ? (
          students.data?.data[0]?.attributes?.users.data.length > 0 ? (
            <StudentDetail students={students.data?.data[0]?.attributes?.users?.data || []} />
          ) : (
            <p style={{ width: 'fit-content', margin: '20px auto', textAlign: 'center', fontSize: '1.5rem' }}>Brak uczniów w klasie!</p>
          )
        ) : (
          <Loading />
        )}
      </InnerWrapper>
    </Wrapper>
  );
};

export default ClassDetails;
