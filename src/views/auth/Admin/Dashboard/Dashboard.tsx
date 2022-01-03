import AdminTemplate from 'components/templates/AdminTemplate/AdminTemplate';
import { Wrapper, Heading, Grid, TotalsGrid, TotalAccounts, TotalClasses, ClassesWrapper } from './Dashboard.styles';

const mockData = [
  {
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
            <TotalClasses />
            <TotalAccounts />
          </TotalsGrid>
          <ClassesWrapper />
        </Grid>
      </Wrapper>
    ))}
  </AdminTemplate>
);

export default Dashboard;
