import { InfoWrapper, StudentResultWrapper } from './UserSearchRecord.styles';
import { Link } from 'react-router-dom';
import React from 'react';

interface Props {
  data: any;
}

const UserSearchRecord: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((user: any) => (
        <StudentResultWrapper as={Link} to={`/student/profile/${user.id}`} key={user.id}>
          <h1>{user.TextClassName}</h1>
          <InfoWrapper>
            <h1>
              {user.first_name} {user.last_name}
            </h1>
            <p>{user.TextRole === 'Student' ? 'Uczeń' : 'Samorząd Uczniowski'}</p>
          </InfoWrapper>
        </StudentResultWrapper>
      ))}
    </>
  );
};

export default UserSearchRecord;
