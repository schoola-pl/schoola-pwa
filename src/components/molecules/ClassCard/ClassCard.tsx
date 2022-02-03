import React from 'react';
import { Circle, ClassDetails, EditLink, Wrapper } from './ClassCard.styles';
import { storeRoot, useGetClassesQuery } from 'store';
import EditIcon from 'assets/icons/EditIcon.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { theme } from 'assets/styles/theme';

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
        <summary>
          {classYear}{' '}
          <span
            style={{
              borderRadius: '0.6rem',
              marginLeft: '0.6rem',
              padding: '0.2rem 0.65rem',
              color: 'white',
              backgroundColor: theme.colors.accentBlue
            }}
          >
            {!classes.isLoading && classes.data.data.length}
          </span>
        </summary>
        <div>
          {classes.isLoading ? (
            <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1.4rem' }}>Wczytywanie klas...</p>
          ) : classes.data.data.length > 0 ? (
            classes.data.data.map(
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
                <Wrapper onClick={() => navigate(`${classLevel}${className}`)} key={index}>
                  <Circle>
                    <h1>{`${classLevel}${className}`}</h1>
                  </Circle>
                  <p>
                    Liczba uczniów: <strong>{usersCount.length}</strong>
                  </p>
                  <EditLink icon={EditIcon} />
                </Wrapper>
              )
            )
          ) : (
            <p style={{ fontSize: '1.3rem', textAlign: 'center', margin: '20px 0' }}>
              Pusto jak na pustyni!{' '}
              <NavLink style={{ color: 'black' }} to={`add-class/${classLevel}`}>
                Dodaj
              </NavLink>
            </p>
          )}
        </div>
      </ClassDetails>
    </div>
  );
};

export default ClassCard;
