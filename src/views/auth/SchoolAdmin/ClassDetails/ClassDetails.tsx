import { useState } from 'react';
import { Heading, InfoWrapper, InnerWrapper, Paragraph, ParagraphsWrapper, Wrapper } from './ClassDetails.styles';
import StudentDetail from 'components/molecules/StudentDetail/StudentDetail';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { storeRoot, useGetClassQuery } from '../../../../store';
import Loading from '../../../../components/molecules/Loading/Loading';
import { ButtonWrapper, AddStudentButton, DeleteClassButton } from './ClassDetails.styles';
import DeleteClassModal from 'components/molecules/DeleteClassModal/DeleteClassModal';

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
  const [isOpen, setVisibility] = useState(false);

  const handleDeleteAlert = () => {
    setVisibility(!isOpen);
  };

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
          <ButtonWrapper>
            <AddStudentButton>Dodaj ucznia</AddStudentButton>
            <DeleteClassButton onClick={handleDeleteAlert}>Usuń klasę</DeleteClassButton>
          </ButtonWrapper>
        </ParagraphsWrapper>
      </InfoWrapper>
      <InnerWrapper>
        {!students.isLoading ? (
          students.data?.data[0].attributes?.users.data.length > 0 ? (
            <StudentDetail students={students.data?.data[0].attributes?.users?.data || []} />
          ) : (
            <p style={{ width: 'fit-content', margin: '20px auto', textAlign: 'center', fontSize: '1.5rem' }}>Brak uczniów w klasie!</p>
          )
        ) : (
          <Loading />
        )}
      </InnerWrapper>
      <DeleteClassModal isOpen={isOpen} />
    </Wrapper>
  );
};

export default ClassDetails;
