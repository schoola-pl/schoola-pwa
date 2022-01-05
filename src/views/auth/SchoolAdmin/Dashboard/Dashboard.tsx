import SchoolAdminTemplate from 'components/templates/SchoolAdminTemplate/SchoolAdminTemplate';
import { Grid, Heading, Wrapper } from './Dashboard.styles';
import ClassIcon from 'assets/icons/ClassIcon.png';
import StudentIcon from 'assets/icons/StudentIcon.png';
import InfoCard from 'components/molecules/InfoCard/InfoCard';
import ClassesCard from 'components/organisms/ClassesCard/ClassesCard';

const mockData = {
  name1: 'Łączna liczba użytkowników',
  name2: 'Łączna ilość klas',
  admin: 'Tomasz Hajto',
  numberOfAccounts: 250,
  numberOfClasses: 15
};

const Dashboard: React.FC = () => (
  <SchoolAdminTemplate>
    <Wrapper>
      <Heading>Witaj {mockData.admin}!</Heading>
      <Grid>
        <InfoCard name={mockData.name1} number={mockData.numberOfAccounts} icon={StudentIcon} />
        <InfoCard name={mockData.name2} number={mockData.numberOfClasses} icon={ClassIcon} />
        <ClassesCard />
      </Grid>
    </Wrapper>
  </SchoolAdminTemplate>
);

export default Dashboard;
