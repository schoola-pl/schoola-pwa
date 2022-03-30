import { InfoWrapper, StudentResultWrapper } from './UserSearchRecord.styles';

interface Props {
  data: any;
}

// TextClassName, Role, firstName, lastName

const UserSearchRecord: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((user: any) => (
        <StudentResultWrapper key={user.id}>
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
