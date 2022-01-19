import { Heading, InfoWrapper, InnerWrapper, Paragraph, ParagraphsWrapper, Wrapper } from './ClassDetails.styles';
import StudentDetail from 'components/molecules/StudentDetail/StudentDetail';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { storeRoot, useGetClassQuery } from '../../../../store';
import Loading from '../../../../components/molecules/Loading/Loading';
import { useEffect } from 'react';

const ClassDetails = () => {
  const { id } = useParams();
  const classLevel = id?.split('')[0] || 0;
  const className = id?.slice(1) || null;
  const user = useSelector((state: storeRoot) => state.user);
  const students = useGetClassQuery({
    schoolId: user?.schoolId || null,
    classLevel,
    className
  });

  useEffect(() => {
    console.log(students);
  }, [students]);

  return (
    <Wrapper>
      <InfoWrapper>
        <Heading>
          Edytuj <span>{String(id).toUpperCase()}</span>
        </Heading>
        <ParagraphsWrapper>
          <Paragraph>Imię i nazwisko</Paragraph>
          <Paragraph>Rola</Paragraph>
          <Paragraph>Data urodzenia</Paragraph>
          <Paragraph>Numer</Paragraph>
        </ParagraphsWrapper>
      </InfoWrapper>
      <InnerWrapper>
        {!students.isLoading ? <StudentDetail students={students.data?.data[0].attributes?.users?.data || []} /> : <Loading />}
      </InnerWrapper>
    </Wrapper>
  );
};

export default ClassDetails;
