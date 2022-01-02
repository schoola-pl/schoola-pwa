import styled from 'styled-components';
import AdminTemplate from 'components/templates/AdminTemplate/AdminTemplate';

const mockData = [
  {
    admin: 'Tomasz Hajto',
    numberOfAccounts: 250,
    numberOfClasses: 15,
    classes: ['1A', '2A', '3A', '1B', '2B', '3B', '1C', '2C', '3C']
  }
];

const Wrapper = styled.div`
  position: relative;
  padding-left: 25rem;
`;

const Heading = styled.h1`
  margin: 3.5rem;
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const TotalGrid = styled.div`
  position: relative;
  display: grid;
  margin-top: 2rem;
  margin-left: 2rem;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const ClassesWrapper = styled.div`
  width: 50rem;
  height: 67.2rem;
  background-color: white;
  grid-column: 2 / 2;
  border-radius: 2rem;
  margin-left: 4rem;
`;

const TotalClassesWrapper = styled.div`
  height: 33rem;
  width: 60rem;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  border-radius: 2rem;
  background-color: white;
`;

const TotalAccountsWrapper = styled.div`
  margin-top: 2.25rem;
  height: 31.5rem;
  width: 60rem;
  z-index: 1;
  grid-column: 1 / 2;
  grid-row: 2 / 2;
  border-radius: 2rem;
  background-color: white;
`;

const ClassesGrid = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(1, 1fr);
  bottom: 67.2rem;
  right: 3.5rem;
`;

const Dashboard: React.FC = () => (
  <AdminTemplate>
    {mockData.map((mock) => (
      <Wrapper>
        <Heading>Witaj {mock.admin}!</Heading>
        <TotalGrid>
          <TotalAccountsWrapper />
          <TotalClassesWrapper />
        </TotalGrid>
        <ClassesGrid>
          <ClassesWrapper />
        </ClassesGrid>
      </Wrapper>
    ))}
  </AdminTemplate>
);

export default Dashboard;
