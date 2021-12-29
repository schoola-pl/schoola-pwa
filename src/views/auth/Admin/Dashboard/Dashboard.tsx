import styled from 'styled-components';

const mockData = [
  {
    admin: 'Tomasz Hajto',
    numberOfAccounts: 250,
    numberOfClasses: 15
  }
];

const Dashboard: React.FC = () => (
  <div>
    {mockData.map((mock) => (
      <h1>hello {mock.admin}</h1>
    ))}
  </div>
);

export default Dashboard;
