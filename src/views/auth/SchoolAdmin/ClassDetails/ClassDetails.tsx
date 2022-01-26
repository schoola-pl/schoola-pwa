import { Heading, InfoWrapper, InnerWrapper, Paragraph, ParagraphsWrapper, Wrapper } from './ClassDetails.styles';
import StudentDetail from 'components/molecules/StudentDetail/StudentDetail';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { storeRoot, useGetClassQuery, useGetUsersCountQuery, useRemoveClassMutation } from 'store';
import Loading from '../../../../components/molecules/Loading/Loading';
import { useModal } from 'hooks/useModal';
import { useUser } from 'hooks/useUser';
import ManageButtons from 'views/auth/Forms/ManageButtons/ManageButtons';

const ClassDetails = () => {
  const { id } = useParams();
  const classLevel = id?.split('')[0] || 0;
  const className = id?.slice(1) || null;
  const { openModal, closeModal } = useModal();
  const { deleteUsers } = useUser();
  const user = useSelector((state: storeRoot) => state.user);
  const [removeClassRecord] = useRemoveClassMutation();
  const navigate = useNavigate();
  const totalUsers = useGetUsersCountQuery({
    schoolId: user?.schoolId || null
  });
  const students = useGetClassQuery({
    schoolId: user?.schoolId || null,
    classLevel,
    className
  });

  const deleteClass = () => {
    closeModal();
    const users = students.data?.data[0].attributes?.users?.data || [];
    deleteUsers(users, totalUsers.data.data[0].attributes.totalUsers);
    const id = students.data.data[0].id;
    removeClassRecord({
      classId: id
    });
    navigate('/school-admin/manage');
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
          <ManageButtons />
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
    </Wrapper>
  );
};

export default ClassDetails;
