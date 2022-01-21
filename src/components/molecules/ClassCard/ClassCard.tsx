import React from 'react';
import { ClassDetails, Wrapper, Circle, EditLink } from './ClassCard.styles';
import { storeRoot, useGetClassesQuery } from '../../../store';
import EditIcon from 'assets/icons/EditIcon.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

interface Props {
  classYear: string;
  classLevel: number;
}

const ClassCard: React.FC<Props> = ({ classYear, classLevel }) => {
  const user = useSelector((state: storeRoot) => state.user);
  const classes = useGetClassesQuery({ schoolId: user?.schoolId || null, classLevel });
  const navigate = useNavigate();

  return (
    <div>
      <ClassDetails>
        <summary>{classYear}</summary>
        <div>
          {classes.isLoading
            ? 'Loading...'
            : classes.data.data.map(
                (
                  {
                    attributes: {
                      className,
                      classLevel,
                      users: { data: usersCount }
                    }
                  }: // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  { attributes: { className: string; classLevel: number; users: { data: any[] } } },
                  index: number
                ) => (
                  <Wrapper onClick={() => navigate(`classes/${classLevel}${className}`)} key={index}>
                    <Circle>
                      <h1>{`${classLevel}${className}`}</h1>
                    </Circle>
                    <p>
                      Liczba uczniów: <strong>{usersCount.length}</strong>
                    </p>
                    <EditLink icon={EditIcon} />
                  </Wrapper>
                )
              )}
        </div>
      </ClassDetails>
    </div>
  );
};

export default ClassCard;
