import { InfoWrapper, StudentResultWrapper } from './UserSearchRecord.styles';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  data: any;
}

const UserSearchRecord: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((user: any) => (
        <StudentResultWrapper as={Link} to={`/student/profiles/${user.id}`} key={user.id}>
          <h1>{user.TextClassName}</h1>
          <InfoWrapper>
            <h1>
              {user.first_name} {user.last_name}
            </h1>
            <p>{user.TextRole === 'Student' ? 'Uczeń' : 'Samorząd Uczniowski'}</p>
          </InfoWrapper>
          <p>&gt;</p>
        </StudentResultWrapper>
      ))}
    </>
  );
};

export default UserSearchRecord;
