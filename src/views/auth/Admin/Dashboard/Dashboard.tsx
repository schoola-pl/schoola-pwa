import styled from 'styled-components';
import AdminTemplate from 'components/templates/AdminTemplate';

const mockData = [
  {
    admin: 'Tomasz Hajto',
    numberOfAccounts: 250,
    numberOfClasses: 15
  }
];

const Dashboard: React.FC = () => (
  <AdminTemplate>
    {mockData.map((mock) => (
      <h1>{mock.admin}</h1>
    ))}
  </AdminTemplate>
);

export default Dashboard;
