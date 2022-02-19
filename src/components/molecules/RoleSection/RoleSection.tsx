import { EmptyParagraph, RoleRecord } from 'components/organisms/Roles/Roles.styles';
import Button from 'components/atoms/Button/Button';
import { ClassDetails } from 'components/molecules/ClassCard/ClassCard.styles';
import React, { useEffect, useState } from 'react';
import { paginatedOptions } from 'types/pagination';
import { useSelector } from 'react-redux';
import { storeRoot, useGetUsersQuery } from 'store';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import paginate from 'paginatejson';
import { useNavigate } from 'react-router';

interface props {
  role: string;
  title: string;
}

interface roleUser {
  id: string;
  first_name: string;
  last_name: string;
  TextClassName: string;
}

const RoleSection: React.FC<props> = ({ role, title }) => {
  const user = useSelector((state: storeRoot) => state.user);
  const roles = useGetUsersQuery({
    role,
    schoolId: user?.schoolId || null
  });
  const [currentPage, setCurrentPage] = useState<paginatedOptions<roleUser> | null>(null);
  const [data, setData] = useState<roleUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!roles.isLoading) {
      const paginatedData = paginate.paginate(roles.data, 1, 5);
      setCurrentPage(paginatedData);
      setData(paginatedData.items);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roles.isLoading]);

  const nextPage = () => {
    const newItems = paginate.paginate(roles.data, currentPage?.next || 1, 5);
    setCurrentPage(newItems);
    setData((prev) => [...prev, ...newItems.items]);
  };

  return (
    <ClassDetails>
      <summary>{title}</summary>
      <div>
        {!roles.isLoading ? (
          data.length > 0 ? (
            data.map(({ first_name, last_name, TextClassName }) => {
              return (
                <RoleRecord
                  onClick={() => navigate(`/school-admin/manage/classes/${TextClassName}#${first_name.toLowerCase()}-${last_name.toLowerCase()}`)}
                >
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
        {(currentPage?.current || 1) !== (currentPage?.last || 1) ? (
          <Button id="more" onClick={nextPage}>
            Załaduj więcej
          </Button>
        ) : null}
      </div>
    </ClassDetails>
  );
};

export default RoleSection;
