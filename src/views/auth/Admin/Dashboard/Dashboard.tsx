import AdminTemplate from 'components/templates/AdminTemplate/AdminTemplate';
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
  numberOfClasses: 15,
  classes: [
    { className: '1A', numberOfStudents: '30' },
    { className: '1B', numberOfStudents: '35' },
    { className: '1C', numberOfStudents: '30' },
    { className: '1D', numberOfStudents: '30' },
    { className: '1E', numberOfStudents: '30' }
  ]
};

const Dashboard: React.FC = () => (
  <AdminTemplate>
    <Wrapper>
      <Heading>Witaj {mockData.admin}!</Heading>
      <Grid>
        <InfoCard name={mockData.name1} number={mockData.numberOfAccounts} icon={StudentIcon} />
        <InfoCard name={mockData.name2} number={mockData.numberOfClasses} icon={ClassIcon} />
        <ClassesCard />
      </Grid>
    </Wrapper>
  </AdminTemplate>
);

export default Dashboard;
