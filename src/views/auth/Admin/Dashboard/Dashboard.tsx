import AdminTemplate from 'components/templates/AdminTemplate/AdminTemplate';
import { Grid, Heading, Wrapper } from './Dashboard.styles';
import ClassIcon from 'assets/icons/ClassIcon.png';
import StudentIcon from 'assets/icons/StudentIcon.png';
import InfoCard from 'components/molecules/InfoCard/InfoCard';

const mockData = {
  name1: 'Łączna liczba użytkowników',
  name2: 'Łączna ilość klas',
  admin: 'Tomasz Hajto',
  numberOfAccounts: 250,
  numberOfClasses: 15,
  classes: ['1A', '2A', '3A', '1B', '2B', '3B', '1C', '2C', '3C']
};

const Dashboard: React.FC = () => (
  <AdminTemplate>
    <Wrapper>
      <Heading>Witaj {mockData.admin}!</Heading>
      <Grid>
        <InfoCard name={mockData.name2} number={mockData.numberOfClasses} icon={ClassIcon} />
        <InfoCard name={mockData.name2} number={mockData.numberOfClasses} icon={StudentIcon} />
        <InfoCard name={mockData.name1} number={mockData.numberOfAccounts} icon={StudentIcon} />
      </Grid>
    </Wrapper>
  </AdminTemplate>
);

export default Dashboard;
