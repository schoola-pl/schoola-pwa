import { InfoWrapper, StudentResultWrapper } from './UserSearchRecord.styles';
import { Link } from 'react-router-dom';

interface Props {
  data: any;
}

const UserSearchRecord: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((user: any) => (
        <StudentResultWrapper as={Link} to="/student/profile/:id" key={user.id}>
          <h1>{user.TextClassName}</h1>
          <InfoWrapper>
            <h1>
              {user.firstName} {user.lastName}
            </h1>
            <p>{user.Role}</p>
          </InfoWrapper>
        </StudentResultWrapper>
      ))}
    </>
  );
};

export default UserSearchRecord;
