import { Grid, Heading, Wrapper } from './Dashboard.styles';
import ClassIcon from 'assets/icons/ClassIcon.png';
import StudentIcon from 'assets/icons/StudentIcon.png';
import InfoCard from 'components/molecules/InfoCard/InfoCard';
import ClassesCard from 'components/organisms/ClassesCard/ClassesCard';
import React from 'react';
import { storeRoot, useGetClassesCountQuery } from '../../../../store';
import { useSelector } from 'react-redux';

const Dashboard: React.FC = () => {
  const user = useSelector((store: storeRoot) => store.user);
  const classesCount = useGetClassesCountQuery({ schoolId: user?.schoolId || null });

  return (
    <Wrapper>
      <Heading>Witaj {user?.first_name || 'użytkowniku'}!</Heading>
      <Grid>
        <InfoCard name="Łączna liczba użytkowników" number={234} icon={StudentIcon} />
        {classesCount.isSuccess && <InfoCard name="Łączna ilość klas" number={classesCount.data.data.length} icon={ClassIcon} />}
        <ClassesCard />
      </Grid>
    </Wrapper>
  );
};

export default Dashboard;
