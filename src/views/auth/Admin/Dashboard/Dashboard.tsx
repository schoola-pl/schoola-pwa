import AdminTemplate from 'components/templates/AdminTemplate/AdminTemplate';
import { Wrapper, Heading, Grid, TotalsGrid, TotalAccounts, TotalClasses, ClassesWrapper } from './Dashboard.styles';
import ClassIcon from 'assets/icons/ClassIcon.png';
import StudentIcon from 'assets/icons/StudentIcon.png';

const mockData = [
  {
    name1: 'Łączna liczba użytkowników',
    name2: 'Łączna ilość klas',
    admin: 'Tomasz Hajto',
    numberOfAccounts: 250,
    numberOfClasses: 15,
    classes: ['1A', '2A', '3A', '1B', '2B', '3B', '1C', '2C', '3C']
  }
];

const Dashboard: React.FC = () => (
  <AdminTemplate>
    {mockData.map((mock) => (
      <Wrapper>
        <Heading>Witaj {mock.admin}!</Heading>
        <Grid>
          <TotalsGrid>
            <TotalClasses name={mock.name2} number={mock.numberOfClasses} icon={ClassIcon} />
            <TotalAccounts name={mock.name1} number={mock.numberOfAccounts} icon={StudentIcon} />
          </TotalsGrid>
          <ClassesWrapper />
        </Grid>
      </Wrapper>
    ))}
  </AdminTemplate>
);

export default Dashboard;
