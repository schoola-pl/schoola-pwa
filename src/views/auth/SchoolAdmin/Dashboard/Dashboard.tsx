import { Grid, Heading, Wrapper } from './Dashboard.styles';
import ClassIcon from 'assets/icons/ClassIcon.png';
import StudentIcon from 'assets/icons/StudentIcon.png';
import InfoCard from 'components/molecules/InfoCard/InfoCard';
import ClassesCard from 'components/organisms/ClassesCard/ClassesCard';
import React from 'react';
import { storeRoot, useGetClassesCountQuery, useGetUsersCountQuery } from 'store';
import { useSelector } from 'react-redux';
import Loading from '../../../../components/molecules/Loading/Loading';

const Dashboard: React.FC = () => {
  const user = useSelector((store: storeRoot) => store.user);
  const classesCount = useGetClassesCountQuery({ schoolId: user?.schoolId || null });
  const usersCount = useGetUsersCountQuery({ schoolId: user?.schoolId || null });

  return (
    <Wrapper>
      <Heading>Witaj {user?.first_name || 'użytkowniku'}!</Heading>
      <Grid>
        {classesCount.isLoading || usersCount.isLoading ? (
          <Loading />
        ) : (
          <>
            <InfoCard
              name="Łączna liczba użytkowników"
              number={usersCount.isLoading ? 0 : usersCount.data.data[0].attributes.totalUsers}
              icon={StudentIcon}
            />
            <InfoCard name="Łączna liczba klas" number={classesCount.isLoading ? 0 : classesCount.data.data.length} icon={ClassIcon} />
            <ClassesCard />
          </>
        )}
      </Grid>
    </Wrapper>
  );
};

export default Dashboard;
