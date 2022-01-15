import EditIcon from 'assets/icons/EditIcon.png';
import blueStudent from 'assets/icons/BlueStudent.svg';
import DeleteIcon from 'assets/icons/DeleteIcon.svg';
import { Wrapper, StudentBox, Name, Role, Number, EditBox, DeleteBox, Date, BoxWrapper } from './StudentDetails.styles';

const mockData = [
  { name: 'Marcin Najman', role: 'Uczeń', date: '12.12.2012', number: 1 },
  { name: 'Marcin Tomaszewski', role: 'Samorząd uczniowski', date: '12.12.2012', number: 1 },
  { name: 'Kaburnikow miner', role: 'Samorząd uczniowski', date: '12.12.2012', number: 1 },
  { name: 'Tomasz Rasputin', role: 'Uczeń', date: '12.12.2012', number: 1 },
  { name: 'Twoj stary', role: 'Samorząd uczniowski', date: '12.12.2012', number: 1 }
];

const StudentDetail: React.FC = () => (
  <>
    {mockData.map(({ name, role, date, number }) => (
      <Wrapper>
        <StudentBox icon={blueStudent} />
        <Name>{name}</Name>
        <Role>{role}</Role>
        <Date>{date}</Date>
        <Number>{number}</Number>
        <BoxWrapper>
          <EditBox icon={EditIcon} />
          <DeleteBox icon={DeleteIcon} />
        </BoxWrapper>
      </Wrapper>
    ))}
  </>
);

export default StudentDetail;
