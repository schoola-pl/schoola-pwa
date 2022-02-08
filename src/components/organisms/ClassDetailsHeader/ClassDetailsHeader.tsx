import React from 'react';
import { Heading, Paragraph, Paragraphs, Wrapper } from './ClassDetailsHeader.styles';
import ManageButtons from 'views/auth/Forms/ManageButtons/ManageButtons';
import { useGetUsersCountQuery, useRemoveClassMutation } from 'store';
import { useModal } from 'hooks/useModal';
import { useUser } from 'hooks/useUser';
import { useNavigate } from 'react-router';
import { authUser } from 'types/auth';

interface props {
  id: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  students: any;
  user: authUser | null;
}

const ClassDetailsHeader: React.FC<props> = ({ id, students, user }) => {
  const [removeClassRecord] = useRemoveClassMutation();
  const { closeModal } = useModal();
  const navigate = useNavigate();
  const { deleteUsers } = useUser();
  const usersCount = useGetUsersCountQuery({
    schoolId: user?.schoolId || null
  });
  const deleteClass = () => {
    closeModal();
    const users = students.data?.data[0].attributes?.users?.data || [];
    deleteUsers(users, usersCount.data.data[0].attributes.totalUsers);
    const id = students.data.data[0].id;
    removeClassRecord({
      classId: id
    });
    navigate(-1);
  };

  return (
    <Wrapper>
      <Heading>
        Edytuj <span>{String(id).toUpperCase()}</span>
      </Heading>
      <Paragraphs>
        <Paragraph>Imię i nazwisko</Paragraph>
        <Paragraph>Rola</Paragraph>
        <Paragraph>Data urodzenia</Paragraph>
        <Paragraph>Numer</Paragraph>
        <ManageButtons deleteClass={deleteClass} className={id || ''} classId={students?.data?.data[0]?.id || 0} />
      </Paragraphs>
    </Wrapper>
  );
};

export default ClassDetailsHeader;
