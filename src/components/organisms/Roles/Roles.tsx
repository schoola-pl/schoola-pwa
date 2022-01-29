import { ClassDetails } from 'components/molecules/ClassCard/ClassCard.styles';
import { ClassesWrapper } from 'views/auth/SchoolAdmin/ManageClasses/ManageClasses.styles';
import { storeRoot, useGetUsersQuery } from 'store';
import { useSelector } from 'react-redux';
import { EmptyParagraph, RoleRecord } from './Roles.styles';
import { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import paginate from 'paginatejson';
import Button from 'components/atoms/Button/Button';
import { paginatedOptions } from 'types/pagination';

interface roleUser {
  id: string;
  first_name: string;
  last_name: string;
}

const Roles = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const students = useGetUsersQuery({
    role: 'Student',
    schoolId: user?.schoolId || null
  });
  const moderators = useGetUsersQuery({
    role: 'Moderator',
    schoolId: user?.schoolId || null
  });
  const [currentStudentsPage, setCurrentStudentsPage] = useState<paginatedOptions<roleUser> | null>(null);
  const [currentModeratorsPage, setCurrentModeratorsPage] = useState<paginatedOptions<roleUser> | null>(null);
  const [studentsArray, setStudentsArray] = useState<roleUser[]>([]);
  const [moderatorsArray, setModeratorsArray] = useState<roleUser[]>([]);

  useEffect(() => {
    if (!students.isLoading && !moderators.isLoading) {
      const paginatedDataS = paginate.paginate(students.data, 1, 5);
      setCurrentStudentsPage(paginatedDataS);
      setStudentsArray(paginatedDataS.items);
      const paginatedDataM = paginate.paginate(moderators.data, 1, 5);
      setCurrentModeratorsPage(paginatedDataM);
      setModeratorsArray(paginatedDataM.items);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [students.isLoading, moderators.isLoading]);

  const nextPage = (role: string) => {
    switch (role) {
      case 'students':
        const newItemsS = paginate.paginate(students.data, currentStudentsPage?.next || 1, 5);
        setCurrentStudentsPage(newItemsS);
        setStudentsArray((prev) => [...prev, ...newItemsS.items]);
        break;
      case 'moderators':
        const newItemsM = paginate.paginate(moderators.data, currentModeratorsPage?.next || 1, 5);
        setCurrentModeratorsPage(newItemsM);
        setModeratorsArray((prev) => [...prev, ...newItemsM.items]);
        break;
    }
  };

  return (
    <ClassesWrapper isCenter columns={2}>
      <ClassDetails>
        <summary>Samorząd Uczniowski</summary>
        <div>
          {!moderators.isLoading ? (
            moderatorsArray.length > 0 ? (
              moderatorsArray.map(({ first_name, last_name }) => {
                return (
                  <RoleRecord>
                    {first_name} {last_name}
                  </RoleRecord>
                );
              })
            ) : (
              <EmptyParagraph>Brak uczniów o tej roli!</EmptyParagraph>
            )
          ) : (
            <EmptyParagraph>Wczytywanie...</EmptyParagraph>
          )}
          {(currentModeratorsPage?.current || 1) !== (currentModeratorsPage?.last || 1) ? (
            <Button id="more" onClick={() => nextPage('moderators')}>
              Załaduj więcej
            </Button>
          ) : null}
        </div>
      </ClassDetails>
      <ClassDetails>
        <summary>Uczniowie</summary>
        <div>
          {!students.isLoading ? (
            studentsArray.length > 0 ? (
              studentsArray.map(({ first_name, last_name }) => {
                return (
                  <RoleRecord>
                    {first_name} {last_name}
                  </RoleRecord>
                );
              })
            ) : (
              <EmptyParagraph>Brak uczniów o tej roli!</EmptyParagraph>
            )
          ) : (
            <EmptyParagraph>Wczytywanie...</EmptyParagraph>
          )}
          {(currentStudentsPage?.current || 1) !== (currentStudentsPage?.last || 1) ? (
            <Button id="more" onClick={() => nextPage('students')}>
              Załaduj więcej
            </Button>
          ) : null}
        </div>
      </ClassDetails>
    </ClassesWrapper>
  );
};

export default Roles;
